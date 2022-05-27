const mongoose = require('mongoose');

const snoopsSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId }
})

const suspectSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    photoUrl: String,
    suspectName: String,
    snoops: [snoopsSchema]
  })
 
module.exports = mongoose.model('Suspect', suspectSchema);