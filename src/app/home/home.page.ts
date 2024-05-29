import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnumPages } from '../enums/enum-pages';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.router.navigate([`/${EnumPages.SPLASH}`]);
  }
}
