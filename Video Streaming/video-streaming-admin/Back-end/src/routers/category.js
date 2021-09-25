const express = require("express");
const Category = require("../models/category");
const auth = require("../middleware/auth");

const router = new express.Router();

router.post("/create-category",auth, async (req, res) => {
	const category = new Category(req.body);
	try {
		await category.save();
		res.status(201).send(category);
	} catch (e) {
		res.status(400).send(e);
	}
});


router.get("/all-category", async (req, res) => {
	try {
		Category.find({},(err,categories)=>
        {
            res.json(categories)
        })
		
	} catch (e) {
		res.status(500).send();
	}
});

router.patch("/edit-category/:id", auth, async (req, res) => {
	const updates = Object.keys(req.body);
	try {
        const category = await Category.findOne({_id:req.params.id})
		if(!category) return res.status(404).send()
        updates.forEach((update)=> (category[update]=req.body[update]))
        await category.save()
        res.send(category)
	} catch(e) {
		res.status(400).send(e);
	}
});

router.delete('/delete-category/:id',auth,async(req,res)=>{
    try{
        const category = await Category.findOneAndDelete({_id:req.params.id})
        if(!category)return res.status(404).send('Category not available')
        res.send(category)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router;
