const Models = require('../database/models/index');

// Get App faculties
exports.getAllFaculties = async (req,res) =>{
    try {
        const faculties = await Models.faculty.findAll();
        res.status(200).json(faculties);
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to fetching all faculties', 
            error 
        });
    }
}

//Get one single faculty
exports.getFaculty = async (req,res,next)=>{
    try {
        const faculty = await Models.faculty.findById(req.params.id);
        if(!faculty){
            return res.status(404).json({
                success:false,
                message:'Faculty Not Found!'
            })
        }
        res.status(201).json({
            success:true,
            faculty
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to fetching faculty', 
            error 
        });
    }
    
}

 // Create new faculty
exports.newFaculty = async (req,res)=>{
    try {
        const faculty = await Models.faculty.create(req.body);
        res.status(201).json({
            success:true,
            message:'Faculty create successfully!',
            faculty
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to create faculty', 
            error: error.message 
        });
    }
   
}

//update faculty
exports.updateFaculty = async (req,res) => {
    try {
        let faculty = await Models.faculty.findById(req.params.id);
        if(!faculty){
            return res.status(404).json({
                success:false,
                message:'Faculty Not Found!'
            })
        }
        faculty = await Models.faculty.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        res.status(200).json({
            success:true,
            message:'Faculty update successfuly!',
            faculty
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to update faculty', 
            error: error.message 
        });
    }
   
}

//Delete Faculty
exports.deleteFaculty = async (req,res) => {
    try {
        const faculty = await Models.faculty.findById(req.params.id);
        if(!faculty){
            return res.status(404).json({
                success:false,
                message:'Faculty Not Found!'
            })
        }
        await faculty.remove();

        res.status(200).json({
            success:true,
            message:'Faculty deleted.'
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to delete faculty', 
            error: error.message 
        });
    }
    
}