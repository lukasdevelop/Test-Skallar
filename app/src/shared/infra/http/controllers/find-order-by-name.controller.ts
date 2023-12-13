import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindOrderByNameUseCase } from "../../../../modules/characters/use-cases/find-order-by-name";

/**
 * Controlador responsável por lidar com as solicitações de busca de personagens ordenados por nome.
 */
export class FindOrderByNameController {
    /**
     * Manipulador da solicitação para buscar personagens por nome.
     * @param request Objeto Request da solicitação HTTP.
     * @param response Objeto Response para enviar a resposta HTTP.
     */
    async handle(request: Request, response: Response){
        // Obtém uma instância do caso de uso de busca por nome de personagem
        const findOrderByNameUseCase = container.resolve(FindOrderByNameUseCase)

        // Executa o caso de uso para obter os personagens
        const characters = await findOrderByNameUseCase.execute();

        // Retorna uma resposta JSON com os personagens obtidos    
        return response.status(200).json({characters});    
    }
}