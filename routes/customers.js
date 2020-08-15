const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')

module.exports = router

// get all
router.get('/', async (req, res) => {
    try{
        const customers = await Customer.find()
        res.json(customers)
    }catch (err){
        res.status(500).json({ message: error.message })

    }
})
// create one 
router.post('/', async (req, res) => {
    const customer = new Customer({
        name: req.body.name,
        bank: req.body.bank,
        address: req.body.address
    })
    try{
        const newCustomer = await customer.save()
        res.status(201).json(newCustomer)
    }catch(err){
        res.status(400).json(err.message)
    }

})
// get one 
router.get('/:id',getCustomer,  (req, res) => {
    
    res.send(res.customer.name)
})
// update one
router.patch('/:id', (req, res) => {
    a = req.params.id
    res.send("update " + a)
})
// delete one 
router.delete('/:id', getCustomer, async (req, res) => {
    try{
        await res.customer.remove()
        res.json({message: "deletion success UwU"})
    }catch(err){
        res.status(500).json({ message: err.message })
    }
})

async function getCustomer (req,res,next){
    let customer
    try {
        customer = await Customer.findById(req.params.id)
        if( Customer == null){
            return res.status(404).json({message: 'customer not found'})
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    res.customer = customer 
    next()
}