import express from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from "./models/bookModels.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';



const app = express() 

// Middleware for  passing request body
app.use(express.json());

// middleware for passing request body CORS Policy
//method 1
app.use(cors()); // Enable all CORS requests (not recommended for production)


//method 2
// app.use(
//     cors({
//         origin: "http://localhost:5555",
//         methods: "GET, POST, PUT, DELETE",
//         allowedHeaders: ["Content-Type"]
//     })
// )

// Define routes
app.get("/", (req, res)=>{
    console.log(req);
    return res.status(234).send('Welcome to the MERN');
});

app.use('/books', booksRoute);


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