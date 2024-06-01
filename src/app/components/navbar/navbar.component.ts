import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EnumVariablesGlobales } from 'src/app/enums/enum-variables-globales';
import { AlertsService } from 'src/app/services/alerts.service';
import { VariablesGlobalesService } from 'src/app/services/variables-globales.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public steps: number[] = [0, 1, 2];
  public stepActive: number = this.steps[0];

  constructor(
    private location: Location,
    private obser: VariablesGlobalesService,
    private alertService: AlertsService
  ) {}

  ngOnInit() {
    this.obser.getData(EnumVariablesGlobales.STEP_NAVBAR).subscribe(
      (res: number) => {
        this.stepActive = res;
      },
      (error) => {
        console.error(error);
        this.alertService.alertBasic(
          'Error',
          '',
          'No se puede asignar el step al navbar',
          ['Aceptar']
        );
        throw new Error('No se puede asignar el step al navbar');
      }
    );
  }

  public back(): void {
    this.location.back();
  }
}
