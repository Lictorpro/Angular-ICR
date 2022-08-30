import { Exhibit } from './exhibit.model';

export class Exhibition {
  public id: number;
  public name: string;
  public category: string;
  public imagePath: string;
  public numberOfExhibits: number;
  public price: number;
  public time: number;
  public exhibits: Exhibit[];

  constructor(
    id: number,
    name: string,
    category: string,
    imagePath: string,
    numberOfExhibits: number,
    price: number,
    time: number,
    exhibits: Exhibit[]
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.imagePath = imagePath;
    this.numberOfExhibits = numberOfExhibits;
    this.price = price;
    this.time = time;
    this.exhibits = exhibits;
  }
}
