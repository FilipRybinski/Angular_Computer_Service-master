export type messageModelType = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}
export class messageModel {
    private id: number;
    private firstName: string;
    private lastName: string;
    private email: string;
    private message: string;

    constructor(id: number, firstName: string, lastName: string, email: string, message: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.message = message;
    }
    public get get_id() {
        return this.id;
    }
    public set set_id(id: number) {
        this.id = id;
    }
    public get get_firstName() {
        return this.firstName
    }
    public set set_firstName(firstName: string) {
        this.firstName = firstName;
    }
    public get get_lastName() {
        return this.lastName
    }
    public set set_lastName(lastName: string) {
        this.lastName = lastName;
    }
    public get get_message() {
        return this.message
    }
    public set set_message(message: string) {
        this.message = message;
    }
    public get get_email() {
        return this.email
    }
    public set set_email(email: string) {
        this.email = email;
    }
}