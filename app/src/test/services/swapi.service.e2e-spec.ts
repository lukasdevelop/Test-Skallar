/*
 * Teste de Integração para o SwapiService.
 * Este teste verifica se o serviço SwapiService pode buscar todos os personagens da SWAPI (Star Wars API).
 */
import { SwapiService } from '../../services/swapi.service'

describe('SwapiService Integration Test', () => {
    let swapiService: SwapiService

    // Configuração inicial antes de todos os testes
    beforeAll(() => {
        swapiService = new SwapiService()
    })

// Teste específico para verificar se o serviço pode buscar todos os personagens da SWAPI
  it('should fetch all characters from the SWAPI', async () => {
        // Executa o serviço para obter todos os personagens
        const result = await swapiService.execute()

        // Verifica se o resultado tem um comprimento maior que 0
        expect(result.length).toBeGreaterThan(0)
    }, 15000) // Aumenta o tempo limite para 15 segundos devido à chamada de API externa
});