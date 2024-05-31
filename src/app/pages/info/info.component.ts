import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { EnumVariablesGlobales } from 'src/app/enums/enum-variables-globales';
import { ITipoDeDocumento } from 'src/app/interfaces/i-tipo-de-documento';
import { VariablesGlobalesService } from 'src/app/services/variables-globales.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  public tiposDeDocumento: ITipoDeDocumento[] = [];

  //Grupo de controles
  public f: UntypedFormGroup = this.form.group({
    tipoDocumento: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    numeroDocumento: [
      '',
      {
        validators: [
          Validators.required,
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(5),
          Validators.pattern(/^\d{5,10}( \d{10})*$/),
        ],
      },
    ],
    fechaExpedicion: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    fechaNacimiento: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    genero: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    correoElectronico: [
      '',
      {
        validators: [Validators.required, Validators.email],
      },
    ],
    confirmarCorreo: [
      '',
      {
        validators: [Validators.required, Validators.email],
      },
    ],
    pin: [
      '',
      {
        validators: [
          Validators.required,
          Validators.required,
          Validators.maxLength(4),
          Validators.minLength(4),
          Validators.pattern(/^\d{4,4}( \d{4})*$/),
        ],
      },
    ],
    confirmarPin: [
      '',
      {
        validators: [
          Validators.required,
          Validators.required,
          Validators.maxLength(4),
          Validators.minLength(4),
          Validators.pattern(/^\d{4,4}( \d{4})*$/),
        ],
      },
    ],
  });

  //Validaciones personalizadas
  get tipoDocumento() {
    return this.f.controls['tipoDocumento'];
  }

  get numeroDocumento() {
    return this.f.controls['numeroDocumento'];
  }

  get fechaExpedicion() {
    return this.f.controls['fechaExpedicion'];
  }

  get fechaNacimiento() {
    return this.f.controls['fechaNacimiento'];
  }

  get genero() {
    return this.f.controls['genero'];
  }

  get correoElectronico() {
    return this.f.controls['correoElectronico'];
  }

  get confirmarCorreo() {
    return this.f.controls['confirmarCorreo'];
  }

  get pin() {
    return this.f.controls['pin'];
  }

  get confirmarPin() {
    return this.f.controls['confirmarPin'];
  }

  constructor(
    private obser: VariablesGlobalesService,
    private http: HttpClient,
    private form: UntypedFormBuilder
  ) {}

  ngOnInit() {
    this.asignarDatosPantalla();
    this.consultarApi();
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

  private consultarApi(): void {
    this.http
      .get('https://api.bancoink.biz/qa/signup/documentTypes?apiKey=030106')
      .subscribe(
        (res: any) => {
          this.tiposDeDocumento = res;
        },
        (error) => {
          throw new Error('Error consultado los tipos de documento');
        }
      );
  }

  public clickSiguiente(): void {
    console.log('🚀 ~ InfoComponent ~ clickSiguiente ~ this.f:', this.f);
    if (this.f.invalid) return;
  }
}
