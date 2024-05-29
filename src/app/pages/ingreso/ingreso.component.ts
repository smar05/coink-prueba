import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnumPages } from 'src/app/enums/enum-pages';
import { EnumVariablesGlobales } from 'src/app/enums/enum-variables-globales';
import { VariablesGlobalesService } from 'src/app/services/variables-globales.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss'],
})
export class IngresoComponent implements OnInit {
  constructor(
    private router: Router,
    private obser: VariablesGlobalesService
  ) {}

  ngOnInit() {
    this.obser.setData(EnumVariablesGlobales.SHOW_NAVBAR, false);
  }

  public registro(): void {
    this.router.navigate([`/${EnumPages.NUMERO_CEL}`]);
  }
}
