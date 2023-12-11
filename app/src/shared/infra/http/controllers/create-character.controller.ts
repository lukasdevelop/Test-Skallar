import { Request, Response } from "express";
import { CreateCharactersUseCase } from "../../../../modules/characters/use-cases/create-characters";
import { container } from "tsyringe";

export class CreateCharacterController {
    async handle(request: Request, response: Response){
        const createUseCase = container.resolve(CreateCharactersUseCase)

        await createUseCase.execute()

        return response.status(200).json({message: "ok"})
    }
}