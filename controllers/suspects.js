const Suspect = require('../models/suspect');
const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid');

const s3 = new S3();

module.exports = {
    create,
    index,
    delete: deleteSuspect
}

function create(req, res){
    console.log(req.file, req.body, 'this is create method', req.user)
    try {
        const filePath = `${uuidv4()}/${req.file.originalname}`
        const params = {Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer};
        s3.upload(params, async function(err, data){
			console.log(err, ' from aws')
            const suspect = await Suspect.create({suspectName: req.body.suspectName, user: req.user, photoUrl: data.Location});
            console.log(suspect)
			await suspect.populate('user');
		
            res.status(201).json({suspect: suspect})
        })


    } catch(err){
        console.log(err)
        res.json({data: err})
    }
}

async function deleteSuspect(req, res){
    try {
        const suspect = await Suspect.findOne({'suspects.id': req.params.id})
        post.remove()
        console.log(post,"has been deleted")
        res.json({data:'SUSPECT HAS BEEN REDACTED'})
    } catch(err){
        res.status(400).json({err})
    }
}

async function index(req, res){
    try {
       
        const suspects = await Suspect.find({}).populate('user').exec()
        res.status(200).json({suspects})
    } catch(err){

    }
}