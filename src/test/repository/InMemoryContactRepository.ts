import { Contact, IContactProps } from "../../entities/Contact";
import { IContactRepository } from "../../repositories/IContactRepository";

export class InMemoryContactRepository implements IContactRepository{
    public items: Contact[] = []
    async findById(id: string): Promise<Contact | null> {
        const alreadyContact = this.items.find(contact => contact.id === id)
        
        if(!alreadyContact) {
            return null
        }
        
        return alreadyContact
    }

    async delete(id: string): Promise<void> {
        this.items.pop()
    }

    async update(id:string, props: IContactProps): Promise<void> {
        this.items[0] = new Contact(props, id)
    }

    async getAll(): Promise<Contact[]> {
        return this.items
    }
}