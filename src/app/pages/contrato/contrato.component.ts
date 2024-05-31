import { Component, OnInit } from '@angular/core';
import { EnumVariablesGlobales } from 'src/app/enums/enum-variables-globales';
import { VariablesGlobalesService } from 'src/app/services/variables-globales.service';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.scss'],
})
export class ContratoComponent implements OnInit {
  constructor(private obser: VariablesGlobalesService) {}

  ngOnInit() {
    this.asignarDatosPantalla();
  }

  private asignarDatosPantalla(): void {
    this.obser.setData(EnumVariablesGlobales.SHOW_NAVBAR, true);
    this.obser.setData(EnumVariablesGlobales.STEP_NAVBAR, 2);
    this.obser.setData(
      EnumVariablesGlobales.TEXTO_INFO_REGISTRO,
      'Solo es necesario que leas detenidamente el contrato que se encuentra al final de esta pantalla y lo aceptes.'
    );
    this.obser.setData(
      EnumVariablesGlobales.TITLE_INFO_REGISTRO,
      'ESTAS MUY CERCA DE SER PARTE DE COINK.'
    );
  }
}
