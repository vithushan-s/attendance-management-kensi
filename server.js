const express = require('express');
const app = express();
require('dotenv').config();
const routerFaculty = require('./routes/facultyRoute');
const routerDepartment = require('./routes/departmentRoute');
const routerCourse = require('./routes/courseRoute');

app.use(express.json());
app.use(routerFaculty);
app.use(routerDepartment);
app.use(routerCourse);

app.listen(process.env.PORT,()=>{
    console.log(`Server running successfully on Port no: ${process.env.PORT}`);
})