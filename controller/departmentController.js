const Department = require('../database/models/department');

// Get App faculties
exports.getAllFaculties = async (req,res) =>{
    try {
        const faculties = await Department.find();
        res.status(200).json(faculties);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching all departments', error });
    }
}

//Get one single department
exports.getDepartment = async (req,res,next)=>{
    const department = await Department.findById(req.params.id);
    if(!department){
        return res.status(404).json({
            success:false,
            message:'Department Not Found!'
        })
    }
    res.status(201).json({
        success:true,
        department
    })
}

 // Create new department
exports.newDepartment = async (req,res)=>{
    const department = await Department.create(req.body)
    res.status(201).json({
        success:true,
        department
    })
}

//update department
exports.updateDepartment = async (req,res) => {
    let department = await Department.findById(req.params.id);
    if(!department){
        return res.status(404).json({
            success:false,
            message:'Department Not Found!'
        })
    }
    department = await Department.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    res.status(200).json({
        success:true,
        department
    })

}

//Delete Department
exports.deleteDepartment = async (req,res) => {
    const department = await Department.findById(req.params.id);
    if(!department){
        return res.status(404).json({
            success:false,
            message:'Department Not Found!'
        })
    }

    await department.remove();

    res.status(200).json({
        success:true,
        message:'Department delete successsfully'
    })
}