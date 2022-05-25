const Suspect = require('../models/suspect');
const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid');

const s3 = new S3();

module.exports = {
    create,
}

function create(req, res){
    console.log(req.file, req.body, 'this is create method', req.user)
    try {
        const filePath = `${uuidv4()}/${req.file.originalname}`
        const params = {Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer};
        s3.upload(params, async function(err, data){
			console.log(err, 'from aws')
            const suspect = await Suspect.create({firstName: req.body.firstName, user: req.user, photoUrl: data.Location});
            console.log(suspect)
			// make sure the post we're sending back has the user populated
			await suspect.populate('user');
		
            res.status(201).json({suspect: suspect})
        })


    } catch(err){
        console.log(err)
        res.json({data: err})
    }
}
