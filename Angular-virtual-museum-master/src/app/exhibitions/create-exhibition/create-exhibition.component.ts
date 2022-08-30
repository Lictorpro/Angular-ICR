import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExhibitionService } from '../exhibition.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-exhibition',
  templateUrl: './create-exhibition.component.html',
  styleUrls: ['./create-exhibition.component.css']
})
export class CreateExhibitionComponent implements OnInit {

  errorExists: boolean = false;
  errorText: string = "";
  constructor(private exhibitionService: ExhibitionService, private router: Router) { }


  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.errorExists = false;
    var newExhibition = this.exhibitionService.createExhibition(form.value.name, form.value.category, form.value.imagePath, form.value.price, form.value.time);
    this.router.navigate(['']);
  }

}
