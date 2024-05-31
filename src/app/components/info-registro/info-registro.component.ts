import { Component, OnInit } from '@angular/core';
import { EnumVariablesGlobales } from 'src/app/enums/enum-variables-globales';
import { AlertsService } from 'src/app/services/alerts.service';
import { VariablesGlobalesService } from 'src/app/services/variables-globales.service';

@Component({
  selector: 'app-info-registro',
  templateUrl: './info-registro.component.html',
  styleUrls: ['./info-registro.component.scss'],
})
export class InfoRegistroComponent implements OnInit {
  public textoInfo: string = '';
  public title: string = '';
  public urlImg: string = '';
  private imagenes: { [key: string]: string } = {
    coink: '../../../assets/img/coink_logo_nn.png',
    coinkPolicia: '../../../assets/img/coink_policia.png',
  };

  constructor(
    private obser: VariablesGlobalesService,
    private alertService: AlertsService
  ) {}

  ngOnInit() {
    this.obser.getData(EnumVariablesGlobales.TITLE_INFO_REGISTRO).subscribe(
      (res: string) => {
        this.title = res;
      },
      (error) => {
        console.error(error);
        this.alertService.alertBasic(
          'Error',
          '',
          'No se puede asignar el titulo',
          ['Aceptar']
        );
        throw new Error('No se puede asignar el titulo');
      }
    );
    this.obser.getData(EnumVariablesGlobales.TEXTO_INFO_REGISTRO).subscribe(
      (res: string) => {
        this.textoInfo = res;
      },
      (error) => {
        console.error(error);
        this.alertService.alertBasic(
          'Error',
          '',
          'No se puede asignar el texto',
          ['Aceptar']
        );
        throw new Error('No se puede asignar el texto');
      }
    );
    this.obser.getData(EnumVariablesGlobales.URL_IMG_INFO_REGISTRO).subscribe(
      (res: string) => {
        this.urlImg = this.imagenes[res];
      },
      (error) => {
        console.error(error);
        this.alertService.alertBasic(
          'Error',
          '',
          'No se puede asignar la imagen',
          ['Aceptar']
        );
        throw new Error('No se puede asignar la imagen');
      }
    );
  }
}
