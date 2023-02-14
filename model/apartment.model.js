const mongoose = require("mongoose")

const apartmentSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true,
        max: 1
    },
    email:{
        type:String,
        unique: true,
        required: [true, "email is required"]
    },
    name:{
        type:String,
        required:[true, "Apartment Name is required"]
    },
    address:{
        type:String,
        required:[true, "Apartment address is required"]
    },
},
{
    timestamps: true
}
);

const Apartment = mongoose.model("Apartment", apartmentSchema)

module.exports = Apartment