import { Characters } from "../entities/characters";

export interface CharactersRepository {
    create(): Promise<void>
    findByName(): Promise<Characters[]>
}
