
const express = require('express');

const router = express.Router();

const service = require("./validationService")

router.post("/", service.validateTotal, function(req, res, next) {
    if(req.missingFields.length > 0){
        res.status(400).json({message: "following fields are missing: " + req.missingFields})
    } else {
        res.status(200).json({message: "all good, keep going!", data: req.body})
        
    } 
})

router.get("/", function(req, res) {
    res.status(200).send("This server only receives objects for validation purposes");
  });

module.exports = router;