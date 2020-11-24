import { Component, OnInit } from '@angular/core';
import {UserStorageService} from '../../services/user-storage.service';
import {SessionUser} from '../../models/session-user.model';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  public user: SessionUser;

  constructor(private userStorageService: UserStorageService) { }

  ngOnInit(): void {
    this.user = this.userStorageService.user;
  }

}
