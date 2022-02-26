import { IContactRepository } from "../../../repositories/IContactRepository";
import { IUpdateContactRequest } from "./type";


export class UpdateContactUseCase {
    constructor(
        private contactRepository: IContactRepository
    ) { }
    async execute(id: string, {email,name,phone}: IUpdateContactRequest) {
        const contactAlreadyExist = await this.contactRepository.findById(id)

        if(!contactAlreadyExist) {
            throw new Error ("Update contact error")
        }

        await this.contactRepository.update(id, {email,name,phone})
    }
}