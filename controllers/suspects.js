const Suspect = require('../models/suspect');
const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid');

const s3 = new S3();

module.exports = {
    create,
}

function create(req, res){
    
}
