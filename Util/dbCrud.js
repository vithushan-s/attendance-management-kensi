
//Get All records 
exports.getAllRecords = (model) => async(req,res) =>{
    try {
        const record = await model.findAll();
        res.status(200).json(record);
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to fetching all records', 
            error 
        });
    }
}

//Get one single record
exports.getRecord = (model) => async (req,res,next)=>{
    try {
        const record = await model.findById(req.params.id);
        if(!record){
            return res.status(404).json({
                success:false,
                message:'Record Not Found!'
            })
        }
        res.status(201).json({
            success:true,
            record
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to fetching record', 
            error 
        });
    }  
}

//Create Record
exports.newRecord = (model) => async (req,res)=>{
    try {
        const record = await model.create(req.body);
        res.status(201).json({
            success:true,
            message:'Record create successfully!',
            record
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to create record', 
            error: error.message 
        });
    }
}


//Update Record
exports.updateRecord = (model) => async (req,res) => {
    try {
        let record = await model.findById(req.params.id);
        if(!record){
            return res.status(404).json({
                success:false,
                message:'Record Not Found!'
            })
        }
        record = await model.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        res.status(200).json({
            success:true,
            message:'Record update successfuly!',
            record
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to update record', 
            error: error.message 
        });
    }
}

//Delete Record
exports.deleteRecord = (model) =>async (req,res) => {
    try {
        const record = await model.findById(req.params.id);
        if(!record){
            return res.status(404).json({
                success:false,
                message:'Record Not Found!'
            })
        }
        await record.remove();

        res.status(200).json({
            success:true,
            message:'Record deleted.'
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Failed to delete record', 
            error: error.message 
        });
    }
    
}
