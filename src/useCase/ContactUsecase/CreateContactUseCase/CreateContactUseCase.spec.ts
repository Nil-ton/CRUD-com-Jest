import { Contact } from "../../../entities/Contact"
import { InMemoryContactRepository } from "../../../test/repository/InMemoryContactRepository"
import { CreateContactUseCase } from "./CreateContactUseCase"

describe("Create contact use case", () => {
    it("should be able to create a new contact", async () => {
        const inMemoryContactRepository = new InMemoryContactRepository()
        const sut = new CreateContactUseCase(inMemoryContactRepository)

        const contactThatAlreadyExist = new Contact({
            name: "Nilton",
            email: "nilton.oliveira0305@gmail.com",
            phone: "986245329",
        }, "5050")

        // inMemoryContactRepository.items.push(contactThatAlreadyExist)

        const response = await sut.execute({
            id: "5050",
            name: "Nilton",
            email: "nilton.oliveira0305@gmail.com",
            phone: "986245329"
        })

        expect(response)
    })
})    