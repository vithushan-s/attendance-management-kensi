exports.DispalyAll(model){
    async (req,res) =>{
        try {
            const obj = await model.findAll();
            res.status(200).json(obj);
        } catch (error) {
            res.status(500).json({ 
                message: 'Failed to fetching all courses', 
                error 
            });
        }
    }
}


