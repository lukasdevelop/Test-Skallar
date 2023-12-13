import { Characters } from "../entities/characters";

/**
 * Interface que define o contrato para um repositório de personagens.
 * Contém métodos para criar personagens a partir de uma API e encontrar personagens ordenados por nome.
 */
export interface CharactersRepository {
      /**
     * Cria personagens a partir de uma API.
     * @param characters Um array de personagens a serem criados.
     * @returns Uma Promise que resolve para um booleano indicando se os personagens foram criados com sucesso.
     */
    createFromApi(characters: Characters[]): Promise<boolean>
    /**
     * Encontra personagens ordenados por nome.
     * @returns Uma Promise que resolve para um array de personagens ordenados por nome.
     */
    findOrderByName(): Promise<Characters[]>
}
