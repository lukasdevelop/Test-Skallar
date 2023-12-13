import { Request, Response } from "express"
import { CreateCharactersUseCase } from "../../../../modules/characters/use-cases/create-characters"
import { container } from "tsyringe"

/**
 * Controlador responsável por lidar com as solicitações de criação de personagens.
 */
export class CreateCharacterController {
    /**
     * Manipulador da solicitação para criar personagens.
     * @param request Objeto Request da solicitação HTTP.
     * @param response Objeto Response para enviar a resposta HTTP.
     */
    async handle(request: Request, response: Response){
        // Obtém uma instância do caso de uso de criação de personagens
        const createUseCase = container.resolve(CreateCharactersUseCase)
        
        // Executa o caso de uso para criar personagens
        await createUseCase.execute()

        // Retorna uma resposta JSON indicando o sucesso da criação
        return response.status(200).json({ message: "Characters created successfully" })
    }
}