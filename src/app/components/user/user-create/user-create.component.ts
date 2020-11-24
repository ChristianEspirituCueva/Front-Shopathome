import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  public user: User = new User();
  public loading: boolean = false;

  constructor(private productService: UserService,
              private router: Router) { }

  onSubmit(): void{
    this.loading = true;
    this.productService.create(this.user)
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }

}
