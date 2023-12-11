import "reflect-metadata"
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import "../../container"
import { router } from "./routes"

//Permitir variaves de ambiente
dotenv.config()

//Express para roteamento
const app = express()

//Transitar JSON
app.use(express.json())

app.use(cors())

app.use(router)

export { app }