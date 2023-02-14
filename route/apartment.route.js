
const express =require("express")
const {apartmentNumber,singleApartment, allApartment, apartmentUpload} = require("../controller/apartmentcontroller")
const router = express.Router();

router.post("/upload", apartmentUpload);
router.get("/count", apartmentNumber);
router.get("/single/:apartmentEmail", singleApartment);
router.get("/all", allApartment);


module.exports = router




