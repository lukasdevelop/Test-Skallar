import { Characters } from "../entities/characters";

export interface CharactersRepository {
    createFromApi(characters: Characters[]): Promise<boolean>
    findOrderByName(): Promise<Characters[]>
}
