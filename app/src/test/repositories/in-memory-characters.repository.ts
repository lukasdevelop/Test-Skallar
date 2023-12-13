/*
 * Implementação da classe InMemoryCharactersRepository.
 * Esta classe implementa a interface CharactersRepository e fornece métodos para manipular dados fictícios em memória.
 */

import { Characters } from '../../modules/characters/entities/characters';
import { CharactersRepository } from '../../modules/characters/repositories/characters.repository'

export class InMemoryCharactersRepository implements CharactersRepository {

    // Array para armazenar os personagens em memória
    public items: Characters[] = []

    /**
     * Cria personagens a partir de dados da API, evitando duplicatas por nome.
     * @param characters Um array de objetos Characters provenientes da API.
     * @returns Uma Promise que resolve para true se novos personagens foram adicionados, ou false se nenhum personagem novo foi adicionado.
     */
    async createFromApi(characters: Characters[]): Promise<boolean> {
        // Filtra apenas novos personagens que não existem no repositório por nome
        const newCharacters = characters.filter(
            (newChar) => !this.items.some(existingChar => existingChar.name === newChar.name)
        )

        // Adiciona novos personagens ao repositório
        this.items.push(...newCharacters)

        // Retorna true se novos personagens foram adicionados, senão false
        return newCharacters.length > 0
    }

    /**
     * Retorna personagens ordenados pelo nome.
     * @returns Uma Promise que resolve para um array de objetos Characters ordenados pelo nome.
     */
    async findOrderByName(): Promise<Characters[]> {
        // Implementação simples que ordena os personagens pelo nome
        const orderedCharacters = [...this.items].sort((a, b) => a.name.localeCompare(b.name));
        return Promise.resolve(orderedCharacters);
    }


}