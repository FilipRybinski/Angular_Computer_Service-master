export type registrationModelType = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    model_type: string;
    des_of_problem: string;
    des_of_demage: string;
}
export class registrationModel {
    private id: number;
    private firstName: string;
    private lastName: string;
    private email: string;
    private model_type: string;
    private des_of_problem: string;
    private des_of_demage: string;
    constructor(id: number, firstName: string, lastName: string, email: string, model_type: string, des_of_problem: string, des_of_demage: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.model_type = model_type;
        this.des_of_problem = des_of_problem;
        this.des_of_demage = des_of_demage;
    }
    public get get_id() {
        return this.id
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
    public get get_model_type() {
        return this.model_type
    }
    public set set_model_type(model_type: string) {
        this.model_type = model_type;
    }
    public get get_email() {
        return this.email
    }
    public set set_email(email: string) {
        this.email = email;
    }
    public get get_des_of_problem() {
        return this.des_of_problem
    }
    public set set_des_of_problem(des_of_problem: string) {
        this.des_of_problem = des_of_problem;
    }
    public get get_des_of_demage() {
        return this.des_of_demage
    }
    public set set_des_of_demage(des_of_demage: string) {
        this.des_of_demage = des_of_demage;
    }
}