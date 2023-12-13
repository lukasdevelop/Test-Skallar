/*
 * Configuração do servidor Express para gerenciar rotas e tratamento de erros.
 * Este arquivo configura o servidor Express, incluindo middleware para permitir variáveis de ambiente, lidar com JSON,
 * permitir solicitações CORS, rotear solicitações para as rotas definidas e lidar com erros.
 */
import "reflect-metadata"
import "express-async-errors"
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import "../../container"
import { router } from "./routes"
import { errorMiddleware } from "./middlewares/error"

//Permitir variaves de ambiente
dotenv.config()

// Configuração do servidor Express
const app = express()

// Middleware para lidar com solicitações CORS
app.use(cors())

// Middleware para processar o corpo da solicitação como JSON
app.use(express.json())

// Roteia solicitações para as rotas definidas
app.use(router)

// Middleware para lidar com erros
app.use(errorMiddleware)

export { app }