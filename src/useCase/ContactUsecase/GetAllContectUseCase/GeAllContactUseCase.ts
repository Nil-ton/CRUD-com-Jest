import { IContactRepository } from "../../../repositories/IContactRepository";

export class GetAllContactUseCase {
    constructor(
        private contectRepository: IContactRepository
    ) {}
    async execute() {
        try {
            const allContect = await this.contectRepository.getAll()
            return allContect
        } catch (error) {
            throw new Error ("error when getting contacts")
        }
    }
}