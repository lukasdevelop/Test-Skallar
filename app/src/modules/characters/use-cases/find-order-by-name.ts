import { inject, injectable } from "tsyringe";
import { Characters } from "../entities/characters";
import { CharactersRepository } from "../repositories/characters.repository";
import { NoCharactersFoundError } from "../../errors/no-characters-found-error";

// O decorator @injectable sinaliza que essa classe pode receber injeção de dependência do tsyringe
@injectable()
export class FindOrderByNameUseCase {

    // Injeta uma implementação do CharactersRepository no construtor
    constructor(@inject("CharactersRepository") private characterRepository: CharactersRepository){}

    /**
     * Executa a lógica principal do caso de uso, que busca e retorna os personagens ordenados por nome.
     * @returns Uma Promise que resolve para um array de objetos Characters ordenados por nome.
     */
    async execute(): Promise<Characters[]>{
        const characters = await this.characterRepository.findOrderByName();

        if(characters.length === 0) {
            throw new NoCharactersFoundError()
        }

        return characters;
    }
}