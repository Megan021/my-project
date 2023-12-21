import React, {createContext, useReducer} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Jobs } from './pages/Jobs';
import { Footer } from './components/Footer';
import { PageNotFound } from './pages/404';
import { Jobdetail } from './components/Jobdetail';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import Postjob from './components/Postjob';
import Logout from './components/Logout';
import { initialState, reducer } from './reducer/UseReducer';
// import Matchjob from './pages/Matchjob';
import EmployerSignup from './pages/EmployerSignup';
import JobseekerSignup from './pages/JobseekerSignup';
import EmployerLogin from './pages/EmployerLogin';
import EmployerHome from './pages/EmployerHome';
import JobSeekerLogin from './pages/JobSeekerLogin';
import Setting from './pages/Setting';
import { EmployerJobdetails } from './components/EmployerJobdetails';
import { EmployerJoblisting } from './components/EmployerJoblisting';
import JobApplication from './components/JobApplication';

//Context API
export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/employerhome" element={<EmployerHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/employerjoblisting" element={<EmployerJoblisting />} />
          <Route path="/jobapplication" element={<JobApplication />} />
          <Route path="/employerjobdetail" element={<EmployerJobdetails />} />
          <Route path="/jobdetail/:jobId" element={<Jobdetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/employersignup" element={<EmployerSignup />} />
          <Route path="/jobseekersignup" element={<JobseekerSignup />} />
          <Route path="/jobseekerlogin" element={<JobSeekerLogin />} />
          <Route path="/setting" element={<Setting />} />
          {/* <Route path="/matchjob" element={<Matchjob />} /> */}
          <Route path="/postajob" element={<Postjob />} />
          <Route path="/login" element={<Login />} />
          <Route path="/employerlogin" element={<EmployerLogin /> } />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
      </UserContext.Provider>
    </>
  );
}
export default App

