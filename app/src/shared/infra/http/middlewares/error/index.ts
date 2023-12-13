import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../../../../helpers/api-error";

/**
 * Middleware de tratamento de erros para lidar com exceções durante as solicitações.
 * @param error Um objeto que representa o erro, incluindo propriedades personalizadas como 'statusCode'.
 * @param request O objeto Request da solicitação HTTP.
 * @param response O objeto Response para enviar a resposta HTTP.
 * @param next Função para chamar o próximo middleware na cadeia, se necessário.
 */

export const errorMiddleware = (error: Error & Partial<ApiError>, request: Request, response: Response, next: NextFunction) => {
    // Obtém o código de status do erro ou usa 500 como padrão
    const statusCode = error.statusCode ?? 500;
    // Obtém a mensagem de erro ou usa 'Internal Server Error' como padrão
    const message = error.statusCode ? error.message : 'Internal Server Error';
    // Retorna uma resposta JSON com o código de status e a mensagem de erro
    return response.status(statusCode).json({ message })

}