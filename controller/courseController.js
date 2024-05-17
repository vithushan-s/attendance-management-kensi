const Models = require('../database/models/index');

// Get App faculties
exports.getAllCourses = async (req,res) =>{
    try {
        const courses = await Models.course.findAll();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to fetching all courses', 
            error 
        });
    }
}

//Get one single course
exports.getCourse = async (req,res,next)=>{
    try {
        const course = await Models.course.findById(req.params.id);
        if(!course){
            return res.status(404).json({
                success:false,
                message:'Course Not Found!'
            })
        }
        res.status(201).json({
            success:true,
            course
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to fetching course', 
            error 
        });
    }
    
}

 // Create new course
exports.newCourse = async (req,res)=>{
    try {
        const course = await Models.course.create(req.body);
        res.status(201).json({
            success:true,
            message:'Course create successfully!',
            course
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to create course', 
            error: error.message 
        });
    }
   
}

//update course
exports.updateCourse = async (req,res) => {
    try {
        let course = await Models.course.findById(req.params.id);
        if(!course){
            return res.status(404).json({
                success:false,
                message:'Course Not Found!'
            })
        }
        course = await Models.course.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        res.status(200).json({
            success:true,
            message:'Course update successfuly!',
            course
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to update course', 
            error: error.message 
        });
    }
   
}

//Delete Faculty
exports.deleteCourse = async (req,res) => {
    try {
        const course = await Models.course.findById(req.params.id);
        if(!course){
            return res.status(404).json({
                success:false,
                message:'Faculty Not Found!'
            })
        }
        await course.remove();

        res.status(200).json({
            success:true,
            message:'Faculty deleted.'
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to delete course', 
            error: error.message 
        });
    }
    
}