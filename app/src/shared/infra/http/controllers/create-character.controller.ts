import { Request, Response } from "express";
import { CreateCharactersUseCase } from "../../../../modules/characters/use-cases/create-characters";
import { container } from "tsyringe";

export class CreateCharacterController {
    async handle(request: Request, response: Response){
        const createUseCase = container.resolve(CreateCharactersUseCase)

        try {
            await createUseCase.execute();
            return response.status(200).json({ message: "Characters created successfully" });
            
        } catch (error) {
            if (error instanceof Error && error.message === "No new characters to create") {

                return response.status(200).json({ message: "No new characters to create" });
            }
            // Outros erros podem ser tratados de acordo com as necessidades
            return response.status(500).json({ error: "Internal Server Error" });
        }
    }
}