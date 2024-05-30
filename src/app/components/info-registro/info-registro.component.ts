import { Component, OnInit } from '@angular/core';
import { EnumVariablesGlobales } from 'src/app/enums/enum-variables-globales';
import { VariablesGlobalesService } from 'src/app/services/variables-globales.service';

@Component({
  selector: 'app-info-registro',
  templateUrl: './info-registro.component.html',
  styleUrls: ['./info-registro.component.scss'],
})
export class InfoRegistroComponent implements OnInit {
  public textoInfo: string = '';
  public title: string = '';

  constructor(private obser: VariablesGlobalesService) {}

  ngOnInit() {
    this.obser.getData(EnumVariablesGlobales.TITLE_INFO_REGISTRO).subscribe(
      (res: string) => {
        this.title = res;
      },
      (error) => {
        console.error(error);
        throw new Error('No se puede asignar el titulo');
      }
    );
    this.obser.getData(EnumVariablesGlobales.TEXTO_INFO_REGISTRO).subscribe(
      (res: string) => {
        this.textoInfo = res;
      },
      (error) => {
        console.error(error);
        throw new Error('No se puede asignar el texto');
      }
    );
  }
}
