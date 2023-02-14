const Apartment = require("../model/apartment.model");


// the total numbers of registered users (counts)

const apartmentNumber = async (req, res) => {

    try {
        const count = await Apartment.countDocuments()
            return res.status(200).json(`Total number of registered user is ${count}`)
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error:error.message
        })
    }
}


// endpoint to upload new apartment
const apartmentUpload = async(req,res) => {
   const {name, address, email, image } = req.body
    try {
        if(!(name && address && email && image )){
            return res.status(401).json({
                error: "All fields are required"
            })
        }
        
        const apartmentExist = await Apartment.findOne({ email })
        if (apartmentExist){
            return res.status(409).json("Email already exist")
        }
        const newApartment = await Apartment.create({
            name, address, email, image
    })
        return res.status(201).json({
            message: "Apartment successfully uploaded "
             })  //data : newApartment
             
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error:error.message
        })
    }
}


// endpoint to get a single apartment with user’s unique email address

const singleApartment = async (req,res)=> {
    const apartmentEmail = req.params.apartmentEmail;
    try {
        const apartment =await Apartment.findOne( {email:apartmentEmail} );
        if(!apartment) {
            return res.status(404).json("Apartment not found")}
        return res.status(200).json(apartment)

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error:error.message
        })
    }
}

// endpoint to get data of all registered apartments


 const allApartment = async (req, res) =>{
    try {
        const apartments = await Apartment.find();
        return res.status(200).json({
            message: apartments
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error:error.message
        })
    }
 }

module.exports = {apartmentUpload,apartmentNumber, singleApartment, allApartment}