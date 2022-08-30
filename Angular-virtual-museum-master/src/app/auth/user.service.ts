import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static Users: User[] = [
    new User(1, 'user1', 'pass1', 'Marko', 'Markovic', 'marko@gmail.com', '0661234567', 'Kumodraska 11', 'Slike'),
    new User(2, 'user2', 'pass2', 'Jovan', 'Jovanovic', 'jovan@gmail.com', '0641234567', 'Danijelova 22', 'Skulpture')
  ]

  currentUser: User = UserService.Users[0];

  getUsername(user: User) : string{
    return user.username;
  }

  getUser(username: string) : User{
    this.currentUser = UserService.Users.find(userToFind => userToFind.username == username)!;
    return this.currentUser;
  }

  getUserById(id: number) : User{
    var foundUser: User = {} as User;
    UserService.Users.forEach(user =>{
      if (user.id == id){
        foundUser = user;
      }
    });
    
    this.currentUser = foundUser;
    return foundUser;
  }

  isPasswordCorrect(username: string, password: string) : boolean{
    return UserService.Users.find(userToFind => (userToFind.username == username && userToFind.password == password)) != undefined;
  }

  registerUser(username: string, password: string, firstName: string, lastName: string, email: string, phone: string, address: string, favouriteExhibits: string) : User{
    var maxId: number = 0;
    UserService.Users.forEach(user => {
      if(maxId < user.id){
        maxId = user.id;
      }
    });

    var id = ++maxId;
    var user: User = new User(id, username, password, firstName, lastName, email, phone, address, favouriteExhibits);

    UserService.Users.push(user);

    this.currentUser = user;
    console.log(user);
    return user;
  }
}
