import { IContactRepository } from "../../../repositories/IContactRepository";


export class DeleteContactUseCase {
    constructor(
        private contactRepository: IContactRepository
    ) { }

    async execute(id: string) {

        const alreadyContact = await this.contactRepository.findById(id)
        
        if (!alreadyContact) {
            throw new Error("Contact is not exist")
        }

        await this.contactRepository.delete(id)
    }
}