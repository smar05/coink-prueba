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
  selector: 'app-numero-cel',
  templateUrl: './numero-cel.component.html',
  styleUrls: ['./numero-cel.component.scss'],
})
export class NumeroCelComponent implements OnInit {
  private lengthNumero: number = 10;
  //Grupo de controles
  public f: UntypedFormGroup = this.form.group({
    celphone: [
      '',
      {
        validators: [
          Validators.required,
          Validators.maxLength(this.lengthNumero),
          Validators.minLength(this.lengthNumero),
          Validators.pattern(/^\d{1,10}( \d{10})*$/),
        ],
      },
    ],
  });

  //Validaciones personalizadas
  get celphone() {
    return this.f.controls['celphone'];
  }

  constructor(
    private obser: VariablesGlobalesService,
    private form: UntypedFormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.obser.setData(EnumVariablesGlobales.SHOW_NAVBAR, true);
    this.obser.setData(EnumVariablesGlobales.STEP_NAVBAR, 0);
    this.obser.setData(
      EnumVariablesGlobales.TEXTO_INFO_REGISTRO,
      'Para comenzar, por favor ingresa <strong>tu número celular.</strong>'
    );
    this.obser.setData(EnumVariablesGlobales.TITLE_INFO_REGISTRO, '');
    this.obser.setData(EnumVariablesGlobales.URL_IMG_INFO_REGISTRO, 'coink');
  }

  public tecladoClick(tecla: string): void {
    let numero: string = this.celphone.value;

    if (tecla === 'check') {
      if (this.f.valid) this.router.navigate([`/${EnumPages.INFO}`]);
    } else if (tecla === 'delete') {
      if (numero.length === 0) return;
      numero = numero.slice(0, -1);
    } else if (numero.length >= this.lengthNumero) {
      return;
    } else {
      numero += tecla;
    }

    this.f.controls['celphone'].setValue(numero);
  }
}
