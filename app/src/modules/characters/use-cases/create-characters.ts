import { CharactersRepository } from "../repositories/characters.repository";
import { inject, injectable } from "tsyringe";

//@injectable 'e o decorator que sinaliza que aqui sera injectado uma dependencia do tsyringe assim
//como o decorator @inject
@injectable()
export class CreateCharactersUseCase {
    constructor(@inject("CharactersRepository") private charsRepository: CharactersRepository){}

    //funcao unica para persistir os dados no banco
    async execute(){
        const characters = await this.charsRepository.create()
        return characters
    }
}