import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public steps: number[] = [0, 1, 2];
  public stepActive: number = this.steps[0];

  constructor() {}

  ngOnInit() {}
}
