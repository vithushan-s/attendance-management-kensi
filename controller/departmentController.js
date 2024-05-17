const Models = require('../database/models/index');

// Get App faculties
exports.getAllDepartments = async (req,res) =>{
    try {
        const departments = await Models.department.findAll();
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to fetching all departments', 
            error 
        });
    }
}

//Get one single department
exports.getDepartment = async (req,res,next)=>{
    try {
        const department = await Models.department.findById(req.params.id);
        if(!department){
            return res.status(404).json({
                success:false,
                message:'Faculty Not Found!'
            })
        }
        res.status(201).json({
            success:true,
            department
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to fetching department', 
            error 
        });
    }
    
}

 // Create new department
exports.newDepartment = async (req,res)=>{
    try {
        const department = await Models.department.create(req.body);
        res.status(201).json({
            success:true,
            message:'Faculty create successfully!',
            department
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to create department', 
            error: error.message 
        });
    }
   
}

//update department
exports.updateDepartment = async (req,res) => {
    try {
        let department = await Models.department.findById(req.params.id);
        if(!department){
            return res.status(404).json({
                success:false,
                message:'Faculty Not Found!'
            })
        }
        department = await Models.department.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        res.status(200).json({
            success:true,
            message:'Faculty update successfuly!',
            department
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to update department', 
            error: error.message 
        });
    }
   
}

//Delete Faculty
exports.deleteDepartment = async (req,res) => {
    try {
        const department = await Models.department.findById(req.params.id);
        if(!department){
            return res.status(404).json({
                success:false,
                message:'Faculty Not Found!'
            })
        }
        await department.remove();

        res.status(200).json({
            success:true,
            message:'Faculty deleted.'
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to delete department', 
            error: error.message 
        });
    }
    
}