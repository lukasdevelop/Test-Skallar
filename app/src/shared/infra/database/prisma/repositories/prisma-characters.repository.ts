/**
 * Implementação concreta do repositório de personagens usando o Prisma.
 * Esta classe implementa a interface CharactersRepository.
 */

import { Characters } from "../../../../../modules/characters/entities/characters";
import { CharactersRepository } from "../../../../../modules/characters/repositories/characters.repository";
import { PrismaClient } from "@prisma/client";

export class PrismaCharactersRepository implements CharactersRepository {
    private prisma: PrismaClient

    constructor(){
        // Inicializa uma instância do PrismaClient
        this.prisma = new PrismaClient()
    }

    /**
     * Busca personagens ordenados por nome.
     * @returns Uma Promise que resolve para um array de objetos Characters ordenados por nome.
     */
    async findOrderByName(): Promise<Characters[]> {
        const characters = await this.prisma.characters.findMany({
            orderBy: {
                name: 'asc'
            }
        })

        return characters
    }

    /**
     * Cria personagens provenientes de uma fonte externa, evitando duplicatas pelo nome.
     * @param characters Um array de objetos Characters a serem criados no banco de dados.
     * @returns Uma Promise que resolve para um boolean indicando se novos personagens foram criados.
     */
    async createFromApi(characters: Characters[]): Promise<boolean> {
            
        // Obtém todos os personagens existentes no banco de dados
        const existingCharacters = await this.prisma.characters.findMany();

        // Filtra os novos personagens para incluir apenas aqueles cujos nomes não existem no banco de dados
        const newCharacters = characters.filter(newChar =>
            !existingCharacters.some(existingChar => existingChar.name === newChar.name)
        )
        
        if (newCharacters.length > 0) {
            // Cria os novos personagens no banco de dados
            await this.prisma.characters.createMany({
                data: newCharacters
            });
            return true;  // Indica que novos personagens foram criados
        } else {
            return false;  // Indica que nenhum novo personagem foi criado
        }
    }
}