import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';

import reportRouter from './routes/index.js'
import { mongoDB } from './database/index.js'


const app = express();

config({
    path: "./config.env"
})

mongoDB();


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

app.use("/api/data", reportRouter)

const PORT = process.env.PORT || 8000

app.get("/", (req, res) => {
    return res.send(`Hello World`)
})


app.listen(PORT, (req, res) => {
    console.log(`Server is active on Port ${PORT}`)
})