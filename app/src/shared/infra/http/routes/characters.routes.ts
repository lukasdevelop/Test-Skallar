// Arquivo de definição de rotas para personagens usando Express

import { Router } from 'express'
import { CreateCharacterController } from '../controllers/create-character.controller'
import { FindOrderByNameController } from '../controllers/find-order-by-name.controller'

// Instâncias dos controladores
const createCharacterController = new CreateCharacterController()
const findOrderByNameController = new FindOrderByNameController()

// Cria um roteador do Express
const charactersRoutes = Router()

// Define as rotas
charactersRoutes.get('/', findOrderByNameController.handle)
charactersRoutes.post('/', createCharacterController.handle)

// Exporta o roteador
export { charactersRoutes}