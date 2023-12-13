// Arquivo de roteamento principal usando Express

import { Router } from 'express'
import { charactersRoutes } from './characters.routes'

// Cria um roteador do Express
const router = Router()

// Utiliza as rotas específicas de personagens sob o caminho '/characters'
router.use('/characters', charactersRoutes)

// Exporta o roteador para uso em outros lugares
export { router }