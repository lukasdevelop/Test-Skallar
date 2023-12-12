import { Characters } from '../../modules/characters/entities/characters';
import { CharactersRepository } from '../../modules/characters/repositories/characters.repository'

export class InMemoryCharactersRepository implements CharactersRepository {

    public items: Characters[] = []

    async createFromApi(characters: Characters[]): Promise<boolean> {
        //Adiciono somente novos items da API, assim nao repetindo os que ja existem por Nome
        const newCharacters = characters.filter(
            (newChar) => !this.items.some(existingChar => existingChar.name === newChar.name)
        )
        
        this.items.push(...newCharacters)

        return newCharacters.length > 0
    }

    async findOrderByName(): Promise<Characters[]> {
        // Implementação simples que ordena os personagens pelo nome
        const orderedCharacters = [...this.items].sort((a, b) => a.name.localeCompare(b.name));
        return Promise.resolve(orderedCharacters);
    }


}