import axios from 'axios';

/**
 * Classe responsável por interagir com a API Swapi para obter dados sobre personagens.
 */
export class SwapiService {
    private apiBaseUrl: string;

    /**
    * Cria uma instância do serviço Swapi, configurando a URL base da API.
    */
    constructor(){
        this.apiBaseUrl = 'https://swapi.dev/api';
    }

     /**
     * Executa uma chamada à API Swapi para obter uma lista de personagens.
     * @returns Uma Promise que resolve para um array de objetos do tipo T, representando os personagens.
     */
    async execute<T>(): Promise<T[]>{
        const response = await axios.get(`${this.apiBaseUrl}/people/`);
        return response.data.results as T[];
    }
} 