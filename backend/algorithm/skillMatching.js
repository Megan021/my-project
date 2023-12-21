// Function to match skills and return the list of matched job postings
const matchSkills = (jobSeekerSkills, jobPostings) => {
    // Create an adjacency list representation of the bipartite graph
    const graph = createGraph(jobSeekerSkills, jobPostings);
  
    // Initialize an empty matching for the job seekers and job postings
    const matching = new Map();
  
    // Perform the Hopcroft-Karp algorithm to find the maximum matching
    while (bfs(graph, matching, jobSeekerSkills)) {
      for (const jobSeekerSkill of jobSeekerSkills) {
        // If the job seeker skill is not already matched
        if (!matching.has(jobSeekerSkill)) {
          dfs(jobSeekerSkill, graph, matching, jobSeekerSkills);
        }
      }
    }
  
    // Convert the matching map to an array of matched job postings
    const matchedJobPostings = [];
    for (const [jobSeekerSkill, jobPostingId] of matching) {
      const matchedJobPosting = jobPostings.find((jobPosting) => jobPosting.id === jobPostingId);
      if (matchedJobPosting) {
        matchedJobPostings.push(matchedJobPosting);
      }
    }
  
    return matchedJobPostings;
  };
  
  // Function to create the adjacency list representation of the bipartite graph
  const createGraph = (jobSeekerSkills, jobPostings) => {
    const graph = new Map();
    for (const jobSeekerSkill of jobSeekerSkills) {
      graph.set(jobSeekerSkill, []);
      for (const jobPosting of jobPostings) {
        if (jobPosting.skill.includes(jobSeekerSkill)) {
          graph.get(jobSeekerSkill).push(jobPosting.id);
        }
      }
    }
    return graph;
  };
  
  // Function to perform the BFS on the bipartite graph
  const bfs = (graph, matching, jobSeekerSkills) => {
    const queue = [];
    const distances = new Map();
    for (const jobSeekerSkill of jobSeekerSkills) {
      if (!matching.has(jobSeekerSkill)) {
        distances.set(jobSeekerSkill, 0);
        queue.push(jobSeekerSkill);
      } else {
        distances.set(jobSeekerSkill, Infinity);
      }
    }
    distances.set(null, Infinity);
  
    while (queue.length > 0) {
      const jobSeekerSkill = queue.shift();
  
      if (distances.get(jobSeekerSkill) < distances.get(null)) {
        for (const jobPostingId of graph.get(jobSeekerSkill)) {
          if (!matching.has(jobPostingId)) {
            matching.set(jobSeekerSkill, jobPostingId);
            matching.set(jobPostingId, jobSeekerSkill);
            return true;
          }
          const jobSeekerSkillNext = matching.get(jobPostingId);
          if (!distances.has(jobSeekerSkillNext)) {
            distances.set(jobSeekerSkillNext, distances.get(jobSeekerSkill) + 1);
            queue.push(jobSeekerSkillNext);
          }
        }
      }
    }
    return false;
  };
  
  // Function to perform the DFS on the bipartite graph
  const dfs = (jobSeekerSkill, graph, matching, jobSeekerSkills) => {
    if (jobSeekerSkill !== null) {
      for (const jobPostingId of graph.get(jobSeekerSkill)) {
        const jobSeekerSkillNext = matching.get(jobPostingId);
        if (jobSeekerSkillNext === undefined) {
          matching.set(jobSeekerSkill, jobPostingId);
          matching.set(jobPostingId, jobSeekerSkill);
          return true;
        }
        if (jobSeekerSkillNext !== jobSeekerSkill && dfs(jobSeekerSkillNext, graph, matching, jobSeekerSkills)) {
          matching.set(jobSeekerSkill, jobPostingId);
          matching.set(jobPostingId, jobSeekerSkill);
          return true;
        }
      }
      return false;
    }
    return true;
  };
  
  module.exports = matchSkills;
  