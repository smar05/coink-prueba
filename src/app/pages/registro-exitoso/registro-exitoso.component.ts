import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EnumVariablesGlobales } from 'src/app/enums/enum-variables-globales';
import { VariablesGlobalesService } from 'src/app/services/variables-globales.service';

@Component({
  selector: 'app-registro-exitoso',
  templateUrl: './registro-exitoso.component.html',
  styleUrls: ['./registro-exitoso.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistroExitosoComponent implements OnInit {
  constructor(private obser: VariablesGlobalesService) {}

  ngOnInit() {
    this.obser.setData(EnumVariablesGlobales.SHOW_NAVBAR, false);
  }
}
