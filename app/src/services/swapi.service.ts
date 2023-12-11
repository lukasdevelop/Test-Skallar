import axios from 'axios';

export class SwapiService {
    private apiBaseUrl: string;

    constructor(){
        this.apiBaseUrl = 'https://swapi.dev/api';
    }

    // Lista todos os personagens da API
    async execute<T>(): Promise<T[]>{
        const response = await axios.get(`${this.apiBaseUrl}/people/`);
        return response.data.results as T[];
    }
} 