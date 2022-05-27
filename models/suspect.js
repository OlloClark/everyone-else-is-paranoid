const mongoose = require('mongoose');


const snoopSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId }
})

const suspectSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // referencing a model
    photoUrl: String,
    suspectName: String,
    snoops: [snoopsSchema]
  })
 

module.exports = mongoose.model('Suspect', suspectSchema);