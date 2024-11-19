import express from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from 'mongoose';

const app = express() 

app.get("/", (req, res)=>{
    console.log(req);
    return res.status(234).send('Welcome to the MERN');
});


mongoose
    .connect(mongoURL)
    .then(()=>{
        console.log('App Connnected to database');
        app.listen(PORT, ()=>{
            console.log(`App is listent to the port ${PORT}`);
        });
        
    })
    .catch((error)=>{
        console.log(error);
    })