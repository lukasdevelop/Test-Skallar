import { Characters } from "../entities/characters";

export interface CharactersRepository {
    createFromApi(characters: Characters[]): Promise<void>
    findByName(): Promise<Characters[]>
}
