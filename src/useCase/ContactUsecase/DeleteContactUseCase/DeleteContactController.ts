import { json, Request, Response } from "express";
import { DeleteContactUseCase } from "./DeleteContactUseCase";

export class DeleteContactController {
    constructor(
        private deleteContactUseCase: DeleteContactUseCase
    ) {}

    async handle(req:Request,res: Response) {
        try {
            const {id} = req.body
            await this.deleteContactUseCase.execute(id)
            return res.json({message: "success", status: 200})
        } catch (error) {
            return res.json(error.message)
        }
    }
}