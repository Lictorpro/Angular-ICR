export class Exhibit{

    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public price: number;
    public review: number;
    public country: string;

    constructor(id: number, name: string, description: string, imagePath: string, price: number, review: number, country: string){
        this.id =  id;
        this.name =  name;
        this.description =  description;
        this.imagePath =  imagePath;
        this.price =  price;
        this.review =  review;
        this.country = country;
    }

}