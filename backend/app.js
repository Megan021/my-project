const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

dotenv.config({path: './config.env'})
require('./db/connection.js')

app.use(express.json());
app.use(cookieParser());


app.use(require('./router/auth.js'));
app.use(require('./router/jobPostRoutes.js'));


const PORT = process.env.PORT;
const hostname = 'localhost';


// const middleware = (req, res, next) => {
//     console.log("This is middleware running.");
//     next();
// }

app.get('/', (req, res) => {
    res.send("<h1>Hello from app js</h1>");
})


// app.get('/about', middleware, (req, res) => {
//     res.send("<h1>Backend Connection Established About Page.</h1>");
// })


app.listen(PORT, hostname, () => {
    console.log(`Server listening on ${hostname}:${PORT}`);
})