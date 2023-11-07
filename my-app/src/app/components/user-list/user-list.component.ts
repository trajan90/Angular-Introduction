import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  selectedUser: any = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data.map((user) => ({
        name: user.name,
        surname: user.surname,
        address: user.address,
        studies: user.studies,
        age: user.age,
        profession: user.profession,
        experience: user.experience,
        hobbies: user.hobbies,
        competencies: user.competencies,
      }));
    });
  }

  selectUser(user: any): void {
    this.selectedUser = user;
  }
}
