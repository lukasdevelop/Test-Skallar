/**
 * Registro de dependências utilizando Tsyringe para injeção de dependência.
 * Aqui são registradas as implementações das interfaces para a resolução de dependências.
 */
import { CharactersRepository } from '../../modules/characters/repositories/characters.repository'
import { PrismaCharactersRepository } from '../infra/database/prisma/repositories/prisma-characters.repository'
import { container } from 'tsyringe'

// Uso do Tsyringe para registrar a implementação concreta do repositório de personagens
// Mantendo a flexibilidade para trocar a implementação no futuro sem alterar o código que a utiliza
container.registerSingleton<CharactersRepository>("CharactersRepository", PrismaCharactersRepository)