const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bank: {
        type: String,
        required: true
    },
    deliveryAddress: {
        type: String,
        required: false
    },

})

module.exports = mongoose.model('Customer', customerSchema)