import { Request, Response } from "express";
import { CreateContactUseCase } from "./CreateContactUseCase";

export class CreateContactController {
    constructor(
        private createContactUseCase: CreateContactUseCase
    ) {}
    async handle(req:Request, res: Response) {
        try {
            const {id, email, name, phone} = req.body
            await this.createContactUseCase.execute({id, email, name, phone})
            return res.json({message: "success", status: 200})
        } catch (error) {
            return res.json(error.message)
        }
    }
}