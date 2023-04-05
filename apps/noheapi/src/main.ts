/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express, { Application, Request, Response } from 'express'
import * as path from "path";
import cors from 'cors'
import cookieParser from 'cookie-parser'

import dotenv from 'dotenv'
dotenv.config()

// import middleware from '../libs/middleware'

const server: Application = express()

// cookie parser
server.use(cors())
server.use(cookieParser())
server.use(express.json({ limit: '25mb' }))
server.use(express.urlencoded({ extended: false, limit: '50mb' }))

server.use("/assets", express.static(path.join(__dirname, "assets")));

// middleware
// server.use(middleware)


server.get("/", (req:Request, res:Response) => {
  res.status(200).json({ success: true ,error: false});
});

const port = process.env.PORT || 3000;
const app = server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});


app.on("error", console.error);
