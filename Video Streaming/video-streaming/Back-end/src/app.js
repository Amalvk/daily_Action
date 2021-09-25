const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const categoryRouter = require('./routers/category')
const cors=require('cors')
const videoRouter = require('./routers/video')
const app = express();

app.use(express.json());
app.use(cors())
app.use(userRouter);
app.use(videoRouter);
app.use(categoryRouter);



module.exports = app;
