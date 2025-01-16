const express =require("express");
const app=express();
require('dotenv').config();
const mongoose=require('mongoose');
const userRoutes=require('./routes/user');
app.use(express.json());
const mongo_uri=process.env.MONGO_URI;
mongoose.connect(mongo_uri)
.then(()=>{
    console.log("connected to database");
}).catch((error)=>{
    console.error('error conecting to database',error);
});
app.use('/api',userRoutes);

const port=3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});