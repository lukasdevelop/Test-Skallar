import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindOrderByNameUseCase } from "../../../../modules/characters/use-cases/find-order-by-name";

export class FindOrderByNameController {
    async handle(request: Request, response: Response){
        const findOrderByNameUseCase = container.resolve(FindOrderByNameUseCase)

        try {
            const characters = await findOrderByNameUseCase.execute();
            return response.status(200).json({characters});
            
        } catch (error) {
            if (error instanceof Error && error.message === "No characters") {

                return response.status(200).json({ message: "No characters" });
            }
            
            return response.status(500).json({ error: "Internal Server Error" });
        }
    }
}