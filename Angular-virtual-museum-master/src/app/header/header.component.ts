import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../auth/profile/profile.component';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profileOpened: boolean = false;

  constructor(public userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openProfile(userId: number){
    this.profileOpened = true;

    const profileDialog =  this.dialog.open(ProfileComponent, {
      disableClose: true,
      width: "30vw",
      data: {user: this.userService.getUserById(userId)}
    });

    profileDialog.afterClosed().subscribe(result => {
      this.profileOpened = false;
    })
  }

}
