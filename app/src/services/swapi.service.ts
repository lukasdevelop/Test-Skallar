import axios from 'axios';

export class SwapiService {
    private apiBaseUrl: string;

    constructor(){
        this.apiBaseUrl = 'https://swapi.dev/api';
    }

    async fetchAllCharacters(){
        const response = await axios.get(`${this.apiBaseUrl}/people/`);
        return response.data.results;
    }
} 