const Suspect = require('../models/suspect');

module.exports = {
    create,
    deleteSnoop
}

async function create(req, res){
 
    try {
		// Find a post, so we need the id of the post
        const suspect = await Suspect.findById(req.params.id);
		
        suspect.snoops.push({username: req.user.username, userId: req.user._id}); //mutating a document
        await suspect.save()// save it
        res.status(201).json({data: 'snoop added'})
    } catch(err){
       
        res.status(400).json({err})
    }
    
}

async function deleteSnoop(req, res){
    try {
        
        const suspect = await Suspect.findOne({'snoops._id': req.params.id, 'snoops.username': req.user.username});
        suspect.snoops.remove(req.params.id) // mutating a document
		console.log(suspect, " <-= post in delete!")
        // req.params.id is the like id 
        await suspect.save() // after you mutate a document you must save
        res.json({data: 'snoop removed'})
    } catch(err){
        res.status(400).json({err})
    }
}