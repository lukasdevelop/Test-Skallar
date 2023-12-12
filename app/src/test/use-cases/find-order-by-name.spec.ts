import "reflect-metadata";
import { InMemoryCharactersRepository } from "../repositories/in-memory-characters.repository";
import { Characters } from "@/modules/characters/entities/characters";
import { FindOrderByNameUseCase } from "@/modules/characters/use-cases/find-order-by-name";

describe("Find Characters by Name Use Case", () => {
    let inMemoryCharactersRepository: InMemoryCharactersRepository;
    let sut: FindOrderByNameUseCase;

    beforeEach(() => {
        inMemoryCharactersRepository = new InMemoryCharactersRepository();
        sut = new FindOrderByNameUseCase(inMemoryCharactersRepository);
    });

    it("should return characters by name", async () => {
        // Arrange
        const char1: Characters = {
            name: "Zezinho",
            height: "1.40",
            gender: "male"
        };

        const char2: Characters = {
            name: "Amanda",
            height: "1.50",
            gender: "female"
        };

        const char3: Characters = {
            name: "Emanuel",
            height: "1.50",
            gender: "male"
        };

        inMemoryCharactersRepository.items.push(char1, char3, char2);
        
        // Act
        const result = await sut.execute();
        console.log(inMemoryCharactersRepository.items)

        // Assert
        expect(result.length).toBe(3);
        //Amanda letra A char2 retorna na primeira posicao
        expect(result[0]).toEqual(char2);
    });
});
