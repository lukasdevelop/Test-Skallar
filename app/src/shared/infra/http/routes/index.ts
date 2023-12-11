import { Router } from 'express'
import { charactersRoutes } from './characters.routes'

const router = Router()

router.use('/characters', charactersRoutes)

export { router }