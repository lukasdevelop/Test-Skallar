import { Router } from 'express'
import { CreateCharacterController } from '../controllers/create-character.controller'
import { FindOrderByNameController } from '../controllers/find-order-by-name.controller'

const createCharacterController = new CreateCharacterController()

const findOrderByNameController = new FindOrderByNameController()

const charactersRoutes = Router()

charactersRoutes.get('/', findOrderByNameController.handle)

charactersRoutes.post('/', createCharacterController.handle)



export { charactersRoutes}