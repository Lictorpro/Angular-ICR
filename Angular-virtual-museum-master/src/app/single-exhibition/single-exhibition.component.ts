import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Exhibit } from '../exhibitions/exhibit.model';
import { Exhibition } from '../exhibitions/exhibition.model';
import { ExhibitionService } from '../exhibitions/exhibition.service';
import { ExhibitDialogComponent } from './exhibit-dialog/exhibit-dialog.component';

@Component({
  selector: 'app-single-exhibition',
  templateUrl: './single-exhibition.component.html',
  styleUrls: ['./single-exhibition.component.css']
})
export class SingleExhibitionComponent implements OnInit {

  exhibition: any;
  exhibits: Exhibit[];
  id: number;

  constructor(private exhibitionService: ExhibitionService,
              private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.exhibition = JSON.parse(params.data);
    })
    this.exhibits = this.exhibitionService.getExhibit(this.exhibition.id);
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(ExhibitDialogComponent, {
      data: {
        name: this.exhibitionService.getExhibit(this.exhibition.id)[id].name,
        description: this.exhibitionService.getExhibit(this.exhibition.id)[id].description,
        imagePath: this.exhibitionService.getExhibit(this.exhibition.id)[id].imagePath,
        price: this.exhibitionService.getExhibit(this.exhibition.id)[id].price,
        review: this.exhibitionService.getExhibit(this.exhibition.id)[id].review,
        country: this.exhibitionService.getExhibit(this.exhibition.id)[id].country
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
