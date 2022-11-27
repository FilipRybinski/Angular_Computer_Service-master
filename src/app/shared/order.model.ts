export type OrderType = {
    id: number;
    accept_date: Date;
    description: string;
    completed: boolean;
    email: string;
    wycena: number
    date_collect: Date;
}
export class Order {
    private id: number;
    private accept_date: Date;
    private description: string;
    private completed: boolean;
    private email: string;
    private wycena: number;
    private date_collect: Date;
    public constructor(id: number, accept_date: Date, description: string, completed: boolean, email: string, wycena: number, date_collect: Date) {
        this.id = id;
        this.accept_date = accept_date;
        this.description = description;
        this.completed = completed;
        this.email = email;
        this.wycena = wycena;
        this.date_collect = date_collect;
    }
    public get get_id() {
        return this.id
    }
    public set set_id(id: number) {
        this.id = id;
    }
    public get get_accept_date() {
        return this.accept_date
    }
    public set set_accept_date(accept_date: Date) {
        this.accept_date = accept_date;
    }
    public get get_description() {
        return this.description
    }
    public set set_descriptione(description: string) {
        this.description = description;
    }
    public get get_completed() {
        return this.completed
    }
    public set set_completed(completed: boolean) {
        this.completed = completed;
    }
    public get get_email() {
        return this.email
    }
    public set set_email(email: string) {
        this.email = email;
    }
    public get get_wycena() {
        return this.wycena
    }
    public set set_wycena(wycena: number) {
        this.wycena = wycena;
    }
    public get get_date_collect() {
        return this.date_collect
    }
    public set set_date_collect(date_collect: Date) {
        this.date_collect = date_collect;
    }

};