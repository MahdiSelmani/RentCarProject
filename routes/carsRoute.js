const mongoose = require('mongoose');
const Car = require('../Models/Car');
const express = require('express');


const router = express.Router();

// GET ALL CARS
router.get('/getallcars', async (req, res) => {

    try { 
        const cars = await Car.find();
        res.json(cars)
        
    } catch (error) {
        res.json(error)
    }



})

//GET SINGLE CAR 
router.get('/getcar/:id', async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        res.json(car)

        
    } catch (error) {
        res.status(500).json(error)
        
    }
})


// POST A NEW CAR

router.post('/addcar', async (req, res) => {
    const  car  = req.body;
    
    try {
        const newCar = await Car.create(car);
        res.json(newCar);
        
    } catch (error) {
        res.json(error)
    }
})

module.exports = router;


// UPDATE A CAR


router.put('/updatecar/:id', async (req, res) => {
    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.id,
            {
              $set: req.body,
            },
            { new: true })
        res.json(updatedCar)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

// DELETE A CAR


router.delete('/deletecar/:id', async (req, res) => {
    try {
        const deletedCar = await Car.findByIdAndDelete(req.params.id);
        res.json('Car deleted successflly')
        
    } catch (error) {
        res.status(500).json(error)
    }
})
