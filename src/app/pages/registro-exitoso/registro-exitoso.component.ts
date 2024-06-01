import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { EnumPages } from 'src/app/enums/enum-pages';
import { EnumVariablesGlobales } from 'src/app/enums/enum-variables-globales';
import { IDatosRegistro } from 'src/app/interfaces/i-datos-registro';
import { AlertsService } from 'src/app/services/alerts.service';
import { VariablesGlobalesService } from 'src/app/services/variables-globales.service';

@Component({
  selector: 'app-registro-exitoso',
  templateUrl: './registro-exitoso.component.html',
  styleUrls: ['./registro-exitoso.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistroExitosoComponent implements OnInit {
  constructor(
    private obser: VariablesGlobalesService,
    private alertService: AlertsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.obser.setData(EnumVariablesGlobales.SHOW_NAVBAR, false);
    this.getDatosRegistro();
  }

  private getDatosRegistro(): void {
    this.obser
      .getData(EnumVariablesGlobales.DATOS_REGISTRO)
      .pipe(take(1))
      .subscribe((res: IDatosRegistro) => {
        console.log(
          '🚀 ~ RegistroExitosoComponent ~ this.obser.getData ~ res:',
          res
        );
        if (!res) {
          this.alertService.alertBasic(
            'Error',
            '',
            'Ha ocurrido un error en los datos',
            ['Ok']
          );
          this.router.navigate([`/${EnumPages.HOME}`]);
          throw new Error();
        }

        let datos: string[] = Object.keys(res).map((key: string) => {
          return `- ${key}: ${(res as any)[key]}`;
        });

        this.alertService.alertBasic(
          'Información',
          'Datos registrados',
          datos.join('\n'),
          ['Ok']
        );
      });
  }
}
