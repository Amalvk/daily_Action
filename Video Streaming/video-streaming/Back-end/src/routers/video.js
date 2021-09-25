const Video = require("../models/video");
const express = require('express')
const auth = require('../middleware/auth')

const router = new express.Router();


router.get("/all-videos", async (req, res) => {
	try{
        Video.find({},(error,videos)=>{
            res.json(videos)
        })
    }
    catch(e){
        res.status(500).send()
    }
});


router.patch('/video/:id',async(req,res)=>{
    try{
        console.log('req',req.params.id)
        const video = await Video.findOne({id:req.params.id});
        console.log("Video",video)
        if(!video) return res.status(404).send()
        video.views = video.views+1
        await video.save()
        res.send(video)
    }catch(e){
        res.status(400).send(e)
    }
})

router.patch('/video/likevideo/:id',auth,async(req,res)=>{
    
    const data = req.body
   
    try{
        const video = await Video.findOne({id:req.params.id});
        if(!video) return res.status(404).send()
            console.log("Like",req.user.liked)
            if(req.user.liked.includes(req.params.id)){
                if(video.liked!==0)
                {
                    video.like=video.like-1;
                }
                req.user['liked'].pop(`${req.params.id}`)
            }
            else{
                if(req.user.disliked.includes(req.params.id)){
                    video.dislike=video.dislike-1;
                    req.user['disliked'].pop(`${req.params.id}`)
                }
                video.like=video.like+1;
                req.user['liked'].push(`${req.params.id}`)
                console.log(req.user)
                }
            // }
    
        await video.save()
        await req.user.save()
        res.send(video)
    }catch(e){
        res.status(400).send(e)
    }
})  

router.patch('/video/dislikevideo/:id',auth,async(req,res)=>{
    try{
        const data = req.body 
        
        const video = await Video.findOne({id:req.params.id});
        if(!video) return res.status(404).send()
        
            console.log("dislike",req.user.disliked)

        if(req.user.disliked.includes(req.params.id)){

            if(video.disliked!==0)
            {
                video.dislike=video.dislike-1;
                console.log("Pop")
                req.user['disliked'].pop(`${req.params.id}`)
            }

        }
        else{
            if(req.user.liked.includes(req.params.id)){

                video.like=video.like-1
                req.user['liked'].pop(`${req.params.id}`)
                }
                video.dislike=video.dislike+1;
                console.log("Push")

            req.user['disliked'].push(`${req.params.id}`)
            // console.log(req.user.disliked)
            }

        await video.save()
        await req.user.save()
        res.send(video)
    }catch(e){
        res.status(400).send(e)
    }
})


module.exports = router;
