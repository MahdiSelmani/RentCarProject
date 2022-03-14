const mongoose = require('mongoose');


const carSchema = mongoose.Schema({
    name: String,
    image: String,
    rentPerHour: Number,
    fuelType: String,
    bookedTimeSlot: Array,
    capacity: Number,

}
    ,
    {
        timestamps: true
    })


module.exports = mongoose.model('Car', carSchema);