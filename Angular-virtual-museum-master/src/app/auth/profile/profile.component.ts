import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isEditing: boolean = false;
  profileForInput: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService) { }

  ngOnInit(): void {
    this.profileForInput = {
      id: this.data.user.id,
      username: this.data.user.username,
      password: this.data.user.password,
      firstName: this.data.user.firstName,
      lastName: this.data.user.lastName,
      email: this.data.user.email,
      phone: this.data.user.phone,
      address: this.data.user.address,
      favouriteExhibits: this.data.user.favouriteExhibits
    };
  }

  finishEditing(form: NgForm){
    this.data.user.username =  this.profileForInput.username;
    this.data.user.password = this.profileForInput.password;
    this.data.user.firstName = this.profileForInput.firstName;
    this.data.user.lastName = this.profileForInput.lastName;
    this.data.user.email = this.profileForInput.email;
    this.data.user.phone = this.profileForInput.phone;
    this.data.user.address = this.profileForInput.address;
    this.data.user.favouriteExhibits = this.profileForInput.favouriteExhibits;

    console.log(this.data.user);
    console.log(UserService.Users);
    this.isEditing = false;
  }

}
