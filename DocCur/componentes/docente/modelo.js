const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reqDate = {
    type: Date,
    required: true,
}

const reqString = {
    type: String,
    required: true,
}

const reqNumber = {
    type: Number,
    required: true,
}


const model = mongoose.model('doccur', trenSchema)
module.exports = model