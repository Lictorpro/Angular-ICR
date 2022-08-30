import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorExists: boolean = false;
  errorText: string = "";
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(!this.userService.getUser(form.value.username)){
      this.errorExists = false;
      var newUser = this.userService.registerUser(form.value.username, form.value.password, form.value.firstName, form.value.lastName, form.value.email, form.value.phone, form.value.address, form.value.favouriteExhibits);
      this.router.navigate(['']);
    }else{
      this.errorExists = true;
      this.errorText = "Ne postoji korisnik sa ovim korisničkim imenom."
    }
  }

}
