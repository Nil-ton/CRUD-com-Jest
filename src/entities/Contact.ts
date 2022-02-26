import { v4 as uuidv4 } from 'uuid';

export type IContactProps = {
    name: string;
    phone: string;
    email: string;
}

export class Contact {
    constructor(public props: IContactProps, public id?:string) {
        this.id = id ? id : uuidv4()
    }
}