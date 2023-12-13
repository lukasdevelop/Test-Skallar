/*
* Helper responsavel por tratar as excessoes da API.
*/
export class ApiError extends Error {
    // Propriedade para armazenar o código de status HTTP associado ao erro
    public readonly statusCode: number

    /**
     * Construtor da classe ApiError.
     * @param message A mensagem de erro associada ao objeto Error.
     * @param statusCode O código de status HTTP associado ao erro.
     */
    constructor(message: string, statusCode: number){
        // Chama o construtor da classe pai (Error) com a mensagem de erro
        super(message)
        // Atribui o código de status à propriedade 'statusCode'
        this.statusCode = statusCode
    }
}