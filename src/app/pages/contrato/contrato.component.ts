import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EnumPages } from 'src/app/enums/enum-pages';
import { EnumVariablesGlobales } from 'src/app/enums/enum-variables-globales';
import { VariablesGlobalesService } from 'src/app/services/variables-globales.service';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.scss'],
})
export class ContratoComponent implements OnInit {
  //Grupo de controles
  public f: UntypedFormGroup = this.form.group({
    terminos: [
      '',
      {
        validators: [Validators.required],
      },
    ],
  });

  //Validaciones personalizadas
  get terminos() {
    return this.f.controls['terminos'];
  }

  constructor(
    private obser: VariablesGlobalesService,
    private form: UntypedFormBuilder,
    private router: Router
  ) {}

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
    this.obser.setData(
      EnumVariablesGlobales.URL_IMG_INFO_REGISTRO,
      'coinkPolicia'
    );
  }

  public aceptar(): void {
    console.log('🚀 ~ ContratoComponent ~ aceptar ~ this.f:', this.f);
    if (this.f.invalid || !this.terminos.value) return;

    this.router.navigate([`/${EnumPages.REGISTRO_EXITOSO}`]);
  }
}
