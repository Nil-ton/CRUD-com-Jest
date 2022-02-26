import { Contact } from "../../../entities/Contact"
import { InMemoryContactRepository } from "../../../test/repository/InMemoryContactRepository"
import { UpdateContactUseCase } from "./UpdateContactUseCase"

describe("Update contact use case", () => {
    it("Shoulde be able update contact", async () => {
        const inMemoryContactRepository = new InMemoryContactRepository()
        const sut = new UpdateContactUseCase(inMemoryContactRepository)

        const contactThatAlreadyExist = new Contact({
            name: "Nilton",
            email: "nilton.oliveira0305@gmail.com",
            phone: "986245329",
        }, "5050")
        inMemoryContactRepository.items.push(contactThatAlreadyExist)

        const updateContact = await sut.execute("5050", {
            email: "nil",
            name: "nil",
            phone: "880354"
        })

        expect(updateContact)
    })
})