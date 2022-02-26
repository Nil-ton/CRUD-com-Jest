import { Contact } from "../../../entities/Contact"
import { InMemoryContactRepository } from "../../../test/repository/InMemoryContactRepository"
import { DeleteContactUseCase } from "./DeleteContactUseCase"

describe("Delete contact use case", () => {
    it("should be able to Delete a contact", async () => {
        const inMemoryContactRepository = new InMemoryContactRepository()
        const sut = new DeleteContactUseCase(inMemoryContactRepository)

        const contactThatAlreadyExist = new Contact({
            name: "Nilton",
            email: "nilton.oliveira0305@gmail.com",
            phone: "986245329",
        }, "5050")
        inMemoryContactRepository.items.push(contactThatAlreadyExist)

        const deleteContact = await sut.execute("5050")

        expect(deleteContact)
    })
})    