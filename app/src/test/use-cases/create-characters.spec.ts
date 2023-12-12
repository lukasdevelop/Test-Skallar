import "reflect-metadata";
import { CreateCharactersUseCase } from "../../modules/characters/use-cases/create-characters";
import { InMemoryCharactersRepository } from "../repositories/in-memory-characters.repository";
import { Characters } from "@/modules/characters/entities/characters";

// API Mokada para nao precisar buscar na API Externa
const apiMock: Characters[] = [
    { "name": "Name 1", "height": "1.40", "gender": "male"},
    { "name": "Name 2", "height": "1.80", "gender": "male"},
    { "name": "Name 3", "height": "1.90", "gender": "female"},

]

describe("Create Characters Use Case", () => {
    let inMemoryCharactersRepository: InMemoryCharactersRepository;
    let sut: CreateCharactersUseCase;

    beforeEach(() => {
        inMemoryCharactersRepository = new InMemoryCharactersRepository();
        sut = new CreateCharactersUseCase(inMemoryCharactersRepository);
    });

    it("should save characters from the API to the repository", async () => {
        // Arrange e Act
        await sut.execute(apiMock);

        // Assert
        expect(inMemoryCharactersRepository.items.length).toBeGreaterThan(0);
    });

    it("should not add duplicates to the repository", async () => {
        // Arrange
        const existingCharacter: Characters = { name: "Nome 1", height: "1.80", gender: "female" };

        // Act
        await sut.execute([existingCharacter]);

        // Assert
        expect(inMemoryCharactersRepository.items).toContain(existingCharacter);

        // Act (tente adicionar o mesmo personagem novamente)
        await expect(sut.execute([existingCharacter])).rejects.toThrow("No new characters to create");

        // Assert
        expect(inMemoryCharactersRepository.items.length).toBe(1);
    });

    it("should add new characters to the repository", async () => {
        // Arrange
        const newCharacters: Characters[] = [
            { name: "New Name 1", height: "1.75", gender: "male" },
            { name: "New Name 2", height: "1.60", gender: "female" },
        ];

        // Act
        await sut.execute(newCharacters);

        // Assert
        expect(inMemoryCharactersRepository.items).toContainEqual(newCharacters[0]);
        expect(inMemoryCharactersRepository.items).toContainEqual(newCharacters[1]);
        expect(inMemoryCharactersRepository.items.length).toBe(2);
    });
});
