import { Router } from 'express'
import { CreateCharacterController } from '../controllers/create-character.controller'

const createCharacterController = new CreateCharacterController()

const charactersRoutes = Router()

charactersRoutes.post('/', createCharacterController.handle)

export { charactersRoutes}