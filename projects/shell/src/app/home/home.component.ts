import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public user: any;

  constructor(private service: AuthLibService) {}

  ngOnInit() {
    this.user = this.service.user;
  }
}
