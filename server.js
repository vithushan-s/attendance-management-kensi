const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
app.use(express.json());

//import routes
const routerFaculty = require('./routes/facultyRoute');
const routerDepartment = require('./routes/departmentRoute');
const routerLecturer = require('./routes/lecturerRoute');

//route middleware
app.use(cors())
app.use(routerFaculty);
app.use(routerDepartment);
app.use(routerLecturer);

//Execute Server
app.listen(process.env.PORT,()=>{
    console.log(`Server running successfully on Port no: ${process.env.PORT}`);
})