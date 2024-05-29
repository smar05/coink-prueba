import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { EnumPages } from 'src/app/enums/enum-pages';
import { EnumVariablesGlobales } from 'src/app/enums/enum-variables-globales';
import { VariablesGlobalesService } from 'src/app/services/variables-globales.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SplashComponent implements OnInit {
  constructor(
    private router: Router,
    private obser: VariablesGlobalesService
  ) {}

  ngOnInit() {
    this.obser.setData(EnumVariablesGlobales.SHOW_NAVBAR, false);
    setTimeout(() => {
      this.router.navigate([`/${EnumPages.INGRESO}`]);
    }, 3000);
  }
}
