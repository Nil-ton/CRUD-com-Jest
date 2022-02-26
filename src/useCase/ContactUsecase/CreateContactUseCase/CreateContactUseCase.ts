import { Contact } from "../../../entities/Contact";
import { IContactRepository } from "../../../repositories/IContactRepository";
import { ICreateContactRequest } from "./type";

export class CreateContactUseCase {
    constructor(
        private contactRepository: IContactRepository
    ) {}
    async execute({email,name,phone, id}:ICreateContactRequest) {
        const alreadyContact = await this.contactRepository.findById(id)

        if(alreadyContact) {
            throw new Error("Contact already exist")
        }

        return new Contact({
            name,
            phone,
            email
        })
    }
}