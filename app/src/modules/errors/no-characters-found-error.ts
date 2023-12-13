import { ApiError } from "../../helpers/api-error";

/**
 * Erro específico para indicar que nenhum personagem foi encontrado no repositório.
 * Estende a classe `ApiError`.
 */

export class NoCharactersFoundError extends ApiError {
    /**
     * Construtor da classe.
     * @param message Mensagem opcional para fornecer detalhes sobre o erro.
     */
    constructor(message?: string){
        // Chama o construtor da classe pai (ApiError) com a mensagem padrão e o código de status 404 (Not Found).
        super("No characters found. The repository is empty.", 404);
    }
}