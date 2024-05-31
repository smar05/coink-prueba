import { Component, OnInit } from '@angular/core';
import { VariablesGlobalesService } from './services/variables-globales.service';
import { EnumVariablesGlobales } from './enums/enum-variables-globales';
import { AlertsService } from './services/alerts.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public showNavbar: boolean = false;

  constructor(
    private obser: VariablesGlobalesService,
    private alertService: AlertsService
  ) {}

  public ngOnInit(): void {
    this.obser.getData(EnumVariablesGlobales.SHOW_NAVBAR).subscribe(
      (res: boolean) => {
        this.showNavbar = res;
      },
      (error) => {
        console.error(error);
        this.alertService.alertBasic(
          'Error',
          '',
          'No se puede desplegar en navbar',
          ['Aceptar']
        );
        throw new Error('No se puede desplegar en navbar');
      }
    );
  }
}
