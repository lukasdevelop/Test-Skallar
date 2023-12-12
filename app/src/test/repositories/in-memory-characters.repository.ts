import { Characters } from '../../modules/characters/entities/characters';
import { CharactersRepository } from '../../modules/characters/repositories/characters.repository'

export class InMemoryCharactersRepository implements CharactersRepository {

    public items: Characters[] = []

    async createFromApi(characters: Characters[]): Promise<boolean> {
        //Adiciono somente novos items da API, assim nao repetindo os que ja existem por Nome
        characters.forEach((apiItem) => {
            if(!this.items.some((item) => item.name === apiItem.name)){
                this.items.push(apiItem)
            }
        })

        return true
    }

    findOrderByName(): Promise<Characters[]> {
        throw new Error('Method not implemented.');
    }


}