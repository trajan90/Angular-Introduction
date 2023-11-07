import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/user.service';

interface UserExperience {
  jobTitle: string;
  years: string;
  location: string;
}
interface User {
  id: number;
  name: string;
  surname: string;
  adress: string;
  studies: string[];
  age: string;
  profession: string;
  experience: UserExperience[];
  hobbies: string[];
  conpetencies: string[];
}

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss'],
})
export class UsersDetailsComponent {
  users: User[] = [];

  constructor(private userService: UserService) {}

  @Input() selectedUser: any;
}
