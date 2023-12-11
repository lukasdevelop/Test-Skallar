import { Characters } from "modules/characters/entities/characters";
import { CharactersRepository } from "../characters.repository";
import { SwapiService } from "services/swapi.service";

export class SwapiCharactersRepository implements CharactersRepository {

    constructor(private repository: SwapiService){}

    async findCharacters(): Promise<Characters[]> {
        const allData = await this.repository.execute<Characters>()
        
        const characters: Characters[] = allData.map((data) => ({
            name: data.name,
            height: data.height,
            gender: data.gender
        }))

        return characters
    }

}