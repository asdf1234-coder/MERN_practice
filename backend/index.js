import express from 'express';
import { PORT, MONGODB_URI } from "./config.js"
import mongoose from "mongoose";
import booksRoute from './routes/bookRoute.js'
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req,res)=>{
    console.log(req.body);
    return res.status(234).send("welcome");
});

app.use('/books', booksRoute);

mongoose.connect(MONGODB_URI)
.then(()=>{
    console.log("app connect mongodb");
    app.listen(PORT, () =>{
        console.log(`app listen at port: ${PORT}`)
    });
})
.catch((err)=>{
    console.log(err)
});
