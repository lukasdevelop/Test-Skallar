import { CharactersRepository } from 'modules/characters/repositories/characters.repository'
import { SwapiCharactersRepository } from 'modules/characters/repositories/implementations/swapi-characters.repository'
import { container } from 'tsyringe'

//Uso o Tsyringe para injecao de depndencias, para melhorar a legibilidade do codigo
//Todos os container sao registrados aqui, assim futuramente se precisar trocar de repositorio mudo
//apenas a classe que a implementa, mantendo o nome "CharactersRepository"
container.registerSingleton<CharactersRepository>("CharactersRepository", SwapiCharactersRepository)