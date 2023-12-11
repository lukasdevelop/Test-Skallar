import { Characters } from "../../../../modules/characters/entities/characters";
import { CharactersRepository } from "../characters.repository";
import { SwapiService } from "../../../../services/swapi.service";
import { PrismaClient } from "@prisma/client";

export class PrismaCharactersRepository implements CharactersRepository {
    private prisma: PrismaClient
    private api: SwapiService

    constructor(){
        this.prisma = new PrismaClient()
        this.api = new SwapiService()
    }

    findByName(): Promise<Characters[]> {
        throw new Error("Method not implemented.");
    }

    async create(): Promise<void> {

        const characters = await this.findAndMapperCharactersFromApi()

        for (const character of characters) {
            await this.prisma.characters.create({
                data: character,
            });
        }
    }

    async findAndMapperCharactersFromApi(): Promise<Characters[]> {
        const allData = await this.api.execute<Characters>()
        
        const characters: Characters[] = allData.map((data) => ({
            name: data.name,
            height: data.height,
            gender: data.gender
        }))

        return characters
    }
    

}