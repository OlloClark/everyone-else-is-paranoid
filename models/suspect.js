const mongoose = require('mongoose');

const suspectSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // referencing a model
    firstName: String,
    lastName: String

  })

module.exports = mongoose.model('Suspect', suspectSchema);