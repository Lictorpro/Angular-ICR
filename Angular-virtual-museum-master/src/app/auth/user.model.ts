export class User{

    public id: number;
    public username: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public phone: string;
    public address: string;
    public favouriteExhibits: string;

    constructor(id: number, username: string, password: string, firstName: string, lastName: string, email: string, phone: string, address: string, favouriteExhibits: string){
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email =  email;
        this.phone = phone;
        this.address = address;
        this.favouriteExhibits = favouriteExhibits;
    }
}