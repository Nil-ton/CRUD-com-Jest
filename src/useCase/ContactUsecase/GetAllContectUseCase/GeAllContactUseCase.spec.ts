import { Contact } from "../../../entities/Contact"
import { InMemoryContactRepository } from "../../../test/repository/InMemoryContactRepository"
import { GetAllContactUseCase } from "./GeAllContactUseCase"

describe("Get all contact use case",() => {
    it("Should be able get all contact ", async() => {
        const inMemoryContactRepository = new InMemoryContactRepository()
        const sut = new GetAllContactUseCase(inMemoryContactRepository)

        const contactThatAlreadyExist = new Contact({
            name: "Nilton",
            email: "nilton.oliveira0305@gmail.com",
            phone: "986245329",
        }, "5050")
        inMemoryContactRepository.items.push(contactThatAlreadyExist)

        const getAllContext = await sut.execute()

        expect(getAllContext).toBeTruthy()
    })
})