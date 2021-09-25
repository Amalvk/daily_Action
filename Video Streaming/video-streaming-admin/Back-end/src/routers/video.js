const express = require("express");
const Video = require("../models/video");
const auth = require("../middleware/auth");

const router = new express.Router();

router.post("/create-video",auth, async (req, res) => {
	const video = new Video(req.body);
	try {
		await video.save();
		res.status(201).send(video);
	} catch (e) {
		res.status(400).send(e);
	}
}); 


router.get("/all-videos", async (req, res) => {
	try {
		Video.find({},(err,categories)=>
        {
            res.json(categories)
        })
		
	} catch (e) {
		res.status(500).send();
	}
});

router.patch("/edit-video/:id", auth, async (req, res) => {
	const updates = Object.keys(req.body);
	try {
        const video = await Video.findOne({_id:req.params.id})
		if(!video) return res.status(404).send()
        updates.forEach((update)=> (video[update]=req.body[update]))
        await video.save()
        res.send(video)
	} catch(e) {
		res.status(400).send(e);
	}
});

router.delete('/delete-video/:id',auth,async(req,res)=>{
    try{
        const video = await Video.findOneAndDelete({_id:req.params.id})
        if(!video)return res.status(404).send('Video not available')
        res.send(video)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router;
