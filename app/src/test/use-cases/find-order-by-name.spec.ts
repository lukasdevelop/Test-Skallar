/*
 * Teste do caso de uso FindOrderByNameUseCase.
 * Este teste verifica o comportamento do caso de uso ao buscar personagens ordenados por nome.
 */
import "reflect-metadata";
import { InMemoryCharactersRepository } from "../repositories/in-memory-characters.repository";
import { Characters } from "../../modules/characters/entities/characters";
import { FindOrderByNameUseCase } from "../../modules/characters/use-cases/find-order-by-name";

describe("Find Characters by Name Use Case", () => {
    let inMemoryCharactersRepository: InMemoryCharactersRepository;
    let sut: FindOrderByNameUseCase;

    // Configuração inicial antes de cada teste
    beforeEach(() => {
        inMemoryCharactersRepository = new InMemoryCharactersRepository();
        sut = new FindOrderByNameUseCase(inMemoryCharactersRepository);
    });

     // Teste específico para verificar se o caso de uso retorna personagens ordenados por nome
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

        // Adiciona personagens ao repositório simulado
        inMemoryCharactersRepository.items.push(char1, char3, char2);
        
        // Act
        const result = await sut.execute();
        // Assert
        expect(result.length).toBe(3);
        // Amanda (letra A) deve estar na primeira posição
        expect(result[0]).toEqual(char2);
    });

    // Teste específico para verificar se o caso de uso retorna uma exceção quando nenhum personagem é encontrado
    it("should return a not found characters", async () => {     
        // Act e Assert
        await expect(sut.execute()).rejects.toThrow() 
    });
});
