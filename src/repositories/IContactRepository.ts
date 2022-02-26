import { Contact, IContactProps } from "../entities/Contact";

export interface IContactRepository {
    findById(id: string):Promise<Contact | null>

    delete(id:string):Promise<void>

    update(id:string, props:IContactProps ):Promise<void>

    getAll():Promise<Contact[]>
}