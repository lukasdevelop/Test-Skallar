import { SwapiService } from './swapi.service'
import {expect, it, describe, beforeAll} from 'vitest'

describe('SwapiService Integration Test', () => {
    let swapiService: SwapiService

    beforeAll(() => {
        swapiService = new SwapiService()
    })

  it('should fetch all characters from the SWAPI', async () => {
        const result = await swapiService.fetchAllCharacters()

        expect(result.length).toBeGreaterThan(0)
    }, 15000)
})