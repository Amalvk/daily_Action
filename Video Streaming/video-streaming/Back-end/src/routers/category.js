const Category = require("../models/category");
const express = require('express')
const router = new express.Router();


router.get("/category", async (req, res) => {
	try{
        Category.find({},(error,categories)=>{
            res.json(categories)
        })
    }
    catch(e){
        res.status(500).send()
    }
});



module.exports = router;
