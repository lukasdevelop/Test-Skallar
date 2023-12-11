import "reflect-metadata"
import { CreateCharactersUseCase } from "./create-characters"
import { CharactersRepository } from "../repositories/characters.repository"
import { PrismaCharactersRepository } from "../repositories/implementations/prisma-characters.repository"
import { SwapiService } from "services/swapi.service"
import { PrismaClient } from "@prisma/client"

describe("Get Character Info Use Case", () => {
    let prisma: PrismaClient;
    let prismaCharactersRepository: CharactersRepository
    let swapiService: SwapiService

    beforeAll(() => {
        prisma = new PrismaClient()
        swapiService = new SwapiService()
        prismaCharactersRepository = new PrismaCharactersRepository()

    })
    afterAll(async () => {
        await prisma.$disconnect(); // Certifique-se de desconectar o Prisma após a execução dos testes
      });

    it("should retrieve the name, height and gender of a characters", async () => {
        const characteres =  await prismaCharactersRepository.create()
        
        expect(characteres).toBeDefined()


    })
})