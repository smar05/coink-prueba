import { Component, OnInit } from '@angular/core';
import { EnumVariablesGlobales } from 'src/app/enums/enum-variables-globales';
import { VariablesGlobalesService } from 'src/app/services/variables-globales.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  constructor(private obser: VariablesGlobalesService) {}

  ngOnInit() {
    this.asignarDatosPantalla();
  }

  private asignarDatosPantalla(): void {
    this.obser.setData(EnumVariablesGlobales.SHOW_NAVBAR, true);
    this.obser.setData(EnumVariablesGlobales.STEP_NAVBAR, 1);
    this.obser.setData(
      EnumVariablesGlobales.TEXTO_INFO_REGISTRO,
      'Ahora necesitamos saber algunos datos tuyos'
    );
    this.obser.setData(
      EnumVariablesGlobales.TITLE_INFO_REGISTRO,
      '¿CUÁLES SON TUS DATOS?'
    );
  }
}
