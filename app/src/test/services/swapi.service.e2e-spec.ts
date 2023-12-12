import { SwapiService } from '../../services/swapi.service'

describe('SwapiService Integration Test', () => {
    let swapiService: SwapiService

    beforeAll(() => {
        swapiService = new SwapiService()
    })

  it('should fetch all characters from the SWAPI', async () => {
        const result = await swapiService.execute()

        expect(result.length).toBeGreaterThan(0)
    }, 15000)
})