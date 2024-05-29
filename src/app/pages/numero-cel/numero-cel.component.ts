import { Component, OnInit } from '@angular/core';
import { EnumVariablesGlobales } from 'src/app/enums/enum-variables-globales';
import { VariablesGlobalesService } from 'src/app/services/variables-globales.service';

@Component({
  selector: 'app-numero-cel',
  templateUrl: './numero-cel.component.html',
  styleUrls: ['./numero-cel.component.scss'],
})
export class NumeroCelComponent implements OnInit {
  constructor(private obser: VariablesGlobalesService) {}

  ngOnInit() {
    this.obser.setData(EnumVariablesGlobales.SHOW_NAVBAR, true);
    this.obser.setData(EnumVariablesGlobales.STEP_NAVBAR, 0);
  }
}
