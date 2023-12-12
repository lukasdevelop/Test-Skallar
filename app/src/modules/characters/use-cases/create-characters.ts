import { SwapiService } from "../../../services/swapi.service";
import { CharactersRepository } from "../repositories/characters.repository";
import { inject, injectable } from "tsyringe";
import { Characters } from "../entities/characters";

// O decorator @injectable sinaliza que esta classe aceita injeção de dependência do tsyringe
@injectable()
export class CreateCharactersUseCase {
    private api: SwapiService;

    // Injeta a implementação do CharactersRepository no construtor
    constructor(@inject("CharactersRepository") private charsRepository: CharactersRepository) {
        this.api = new SwapiService(); // Inicializa a instância do SwapiService
    }

    /**
     * Executa a lógica principal do caso de uso.
     * @param api Um array opcional do tipo Characters proveniente de uma fonte externa.
     */
    async execute(api?: Characters[]): Promise<void> {
        // Se nenhum array for passado, chama a função para mapear e obter dados da API externa
        const charactersFromApi = api || await this.toEntity();

          // Chama o método createFromApi no repositório para persistir os personagens
          const charactersCreated = await this.charsRepository.createFromApi(charactersFromApi);

          if (!charactersCreated) {
              throw new Error("No new characters to create");
          }

    }

    /**
     * Converte os dados da API externa (Swapi) para o tipo Characters.
     * @returns Um array de objetos Characters mapeados a partir da API externa.
     */
    private async toEntity(): Promise<Characters[]> {
        // Chama o serviço Swapi para obter dados da API externa já tipados como Characters
        const apiExterna = await this.api.execute<Characters>();

        // Realiza o mapeamento para o tipo da entidade Character
        const characters: Characters[] = apiExterna.map((char) => ({
            name: char.name,
            height: char.height,
            gender: char.gender
        }));

        return characters;
    }
}
