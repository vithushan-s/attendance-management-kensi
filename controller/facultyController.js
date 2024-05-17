const Faculty = require('../database/models/faculty');

// Get App faculties
exports.getAllFaculties = async (req,res) =>{
    try {
        const faculties = await Faculty.find();
        res.status(200).json(faculties);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching all faculties', error });
    }
}

//Get one single faculty
exports.getFaculty = async (req,res,next)=>{
    const faculty = await Faculty.findById(req.params.id);
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
}

 // Create new faculty
exports.newFaculty = async (req,res)=>{
    const faculty = await Faculty.create(req.body)
    res.status(201).json({
        success:true,
        faculty
    })
}

//update faculty
exports.updateFaculty = async (req,res) => {
    let faculty = await Faculty.findById(req.params.id);
    if(!faculty){
        return res.status(404).json({
            success:false,
            message:'Faculty Not Found!'
        })
    }
    faculty = await Faculty.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    res.status(200).json({
        success:true,
        faculty
    })

}

//Delete Faculty
exports.deleteFaculty = async (req,res) => {
    const faculty = await Faculty.findById(req.params.id);
    if(!faculty){
        return res.status(404).json({
            success:false,
            message:'Faculty Not Found!'
        })
    }

    await faculty.remove();

    res.status(200).json({
        success:true,
        message:'Faculty delete successsfully'
    })
}