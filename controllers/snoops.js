const Suspect = require('../models/suspect');

module.exports = {
    create,
    deleteSnoop
}

async function create(req, res){
 
    try {
        const suspect = await Suspect.findById(req.params.id);

	    suspect.snoops.push({username: req.user.username, userId: req.user._id});
        await suspect.save()
        res.status(201).json({data: 'snoop added'})
        } catch(err){
        console.log("snoop create function not firing")
        res.status(400).json({err})
        }
    
}

async function deleteSnoop(req, res){
    try {
        
        const suspect = await Suspect.findOne({'snoops._id': req.params.id, 'snoops.username': req.user.username});
        
        suspect.snoops.remove(req.params.id)
        await suspect.save()
        res.json({data: 'snoop removed'})
        } catch(err){
        res.status(400).json({err})
    }
}