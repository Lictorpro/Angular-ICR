import { EventEmitter } from '@angular/core';
import { Exhibit } from './exhibit.model';
import { Exhibition } from './exhibition.model';

export class ExhibitionService {
  exhibitionSelected = new EventEmitter<Exhibition>();

  static Exhibitions: Exhibition[] = [
    new Exhibition(
      0,
      'Postavka 1',
      'Renesansa',
      'https://aperture.org/wp-content/uploads/2020/08/IMG_0101.jpg',
      10,
      1000,
      20,
      [
        new Exhibit(
          0,
          'Polje',
          'Delo iz 15. veka naslikao Paja Jovanovic',
          'http://galleryathos.com/wp-content/uploads/2017/02/slika-Zitna-polja-40x30-ulje-na-platnu.jpg',
          500,
          4.2,
          'Srbija'
        ),
        new Exhibit(
          1,
          'Slika 2',
          'Delo iz 17. veka naslikao Paja Jovanovic',
          'http://galleryathos.com/wp-content/uploads/2017/02/slika-Zitna-polja-40x30-ulje-na-platnu.jpg',
          900,
          3.3,
          'Nemacka'
        ),
      ]
    ),
    new Exhibition(
      1,
      'Postavka 2',
      'Barok',
      'https://aperture.org/wp-content/uploads/2020/08/IMG_0101.jpg',
      100,
      1000,
      200,
      []
    ),
    new Exhibition(
      2,
      'Postavka 3',
      'Barok',
      'https://aperture.org/wp-content/uploads/2020/08/IMG_0101.jpg',
      100,
      1000,
      200,
      []
    ),
    new Exhibition(
      3,
      'Postavka 4',
      'Barok',
      'https://aperture.org/wp-content/uploads/2020/08/IMG_0101.jpg',
      100,
      1000,
      200,
      []
    ),
    new Exhibition(
      4,
      'Neka',
      'Barok',
      'https://aperture.org/wp-content/uploads/2020/08/IMG_0101.jpg',
      100,
      1000,
      200,
      []
    ),
  ];

  getExhibition(id: number) {
    return ExhibitionService.Exhibitions[id];
  }

  getExhibitions() {
    return ExhibitionService.Exhibitions.slice();
  }

  getExhibit(id: number) {
    if (id == ExhibitionService.Exhibitions[id].id) {
      return ExhibitionService.Exhibitions[id].exhibits;
    } else {
      return [];
    }
  }

  createExhibition(name: string, category: string, imagePath: string, price: number, time: number,): Exhibition {
    var maxId: number = 0;
    ExhibitionService.Exhibitions.forEach(exhibition => {
      if (maxId < exhibition.id) {
        maxId = exhibition.id;
      }
    });

    var id = ++maxId;
    var exhibits = <Exhibit[]>[];
    var numberOfExhibits = exhibits.length;
    var exhibition: Exhibition = new Exhibition(id, name, category, imagePath, numberOfExhibits, price, time, exhibits);

    ExhibitionService.Exhibitions.push(exhibition);

    console.log(exhibition);
    return exhibition;
  }
}
