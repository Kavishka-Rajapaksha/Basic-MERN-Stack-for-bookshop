import express from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from "./models/bookModels.js";

const app = express() 

// Middleware for  passing request body
app.use(express.json());

// Define routes
app.get("/", (req, res)=>{
    console.log(req);
    return res.status(234).send('Welcome to the MERN');
});


//Rounte for save a new book
app.post('/books',async (req, res)=>{
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message : 'All fields are required title author publishYear'
            });
        }
        const newBook = {
            title : req.body.title,
            author : req.body.author,
            publishYear : req.body.publishYear
        };
        const book = await Book.create(newBook);
        return res.status(201).send(book);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message : error.message});
    }
})


//database connection
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