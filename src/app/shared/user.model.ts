export type UserType = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string
    type: string;
}
export class User {
    private firstName: string;
    private lastName: string;
    private email: string;
    private phone: string;
    private password: string
    private type: string;
    public constructor(firstName: string, lastName: string, email: string, phone: string, password: string, type: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.type = type;
    }
    public get get_firstName() {
        return this.firstName
    }
    public set set_firstName(firstName: string) {
        this.firstName = firstName;
    }
    public get get_lastName() {
        return this.lastName;
    }
    public set set_lastName(lastName: string) {
        this.lastName = lastName;
    }
    public get get_email() {
        return this.email
    }
    public set set_email(email: string) {
        this.email = email;
    }
    public get get_phone() {
        return this.phone
    }
    public set set_phone(phone: string) {
        this.phone = phone;
    }
    public get get_password() {
        return this.password
    }
    public set set_password(password: string) {
        this.password = password;
    }
    public get get_type() {
        return this.type
    }
    public set set_type(type: string) {
        this.type = type;
    }

};