import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exhibition } from './exhibition.model';
import { ExhibitionService } from './exhibition.service';

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.css'],
  providers: [ExhibitionService],
})
export class ExhibitionsComponent implements OnInit {
  exhibitions: Exhibition[];
  filteredExhibitions: Exhibition[];
  selectedExhibition: Exhibition;

  private _searchTerm: string;

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredExhibitions = this.filterExhibitions(value);
  }

  filterExhibitions(searchString: string) {
    return this.exhibitions.filter(
      (exhibition) =>
        exhibition.category.toLowerCase().indexOf(searchString.toLowerCase()) !==
        -1
    );
  }

  constructor(
    private exhibitionService: ExhibitionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.exhibitions = this.exhibitionService.getExhibitions();
    this.filteredExhibitions = this.exhibitions;
    console.log(this.exhibitions);
  }

  getDetails(id: number) {
    this.selectedExhibition = this.exhibitionService.getExhibition(id);
    this.router.navigate(['single-exhibition'], {
      queryParams: { data: JSON.stringify(this.selectedExhibition) },
    });
  }
}
