import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Exhibit } from 'src/app/exhibitions/exhibit.model';

@Component({
  selector: 'app-exhibit-dialog',
  templateUrl: './exhibit-dialog.component.html',
  styleUrls: ['./exhibit-dialog.component.css']
})
export class ExhibitDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
