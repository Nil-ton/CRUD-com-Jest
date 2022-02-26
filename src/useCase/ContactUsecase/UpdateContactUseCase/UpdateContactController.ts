import { Request, Response } from "express";
import { UpdateContactUseCase } from "./UpdateContactUseCase";


export class UpdateContactController {
    constructor(
        private updateContactUseCase: UpdateContactUseCase
    ) {}

    async handle(req:Request, res:Response) {
        try {
            const {id, name, email, phone} = req.body
            const props = {name, email, phone}
            await this.updateContactUseCase.execute(id, props)
            return res.json({message:"success", status: 200})
        } catch (error) {
            return res.json(error.message)
        }
    }
}