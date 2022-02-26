import { Request, Response } from "express";
import { GetAllContactUseCase } from "./GeAllContactUseCase";

export class GetAllContactController {
    constructor(
        private getAllControllerUseCase:GetAllContactUseCase
    ) {}

    async handle(req:Request, res: Response) {
        try {
            const allContact = await this.getAllControllerUseCase.execute()
            return res.json({data: allContact, status: 200})
        } catch (error) {
            return res.json(error.message)
        }
    }
}