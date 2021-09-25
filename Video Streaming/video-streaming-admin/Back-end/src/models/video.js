const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    title:{
        type:String,
        required:true,
        trim:true,
    },
    category:{
        type:String,
        required:true,
        trim:true,
    
        },
    description:{
        type:String,
        trim:true,
        required:true
    },
    views:{
        type:Number,
        default:0,
    },
    like:{
        type:Number,
        default:0,
    },
    dislike:{
        type:Number,
        default:0,
    }
});


const Video = mongoose.model("Video", VideoSchema);

module.exports = Video;