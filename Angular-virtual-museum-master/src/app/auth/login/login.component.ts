import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  errorExists: boolean = false;
  errorText: string = "";
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    var username = form.value.username;
    var password = form.value.password;
    var user = this.userService.getUser(username);
    if(!user){
      this.errorExists = true;
      this.errorText = "Ne postoji registrovan korisnik sa korisničkim imenom " + username;
      return;
    }
    var isPasswordValid = this.userService.isPasswordCorrect(username, password);
    if(!isPasswordValid){
      this.errorExists = true;
      this.errorText = "Nije uneta ispravna lozinka";
      return;
    }
    this.errorExists = false;
    this.router.navigate(['']);
  }

}
