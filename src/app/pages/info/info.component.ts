import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { EnumPages } from 'src/app/enums/enum-pages';
import { EnumVariablesGlobales } from 'src/app/enums/enum-variables-globales';
import { IDatosRegistro } from 'src/app/interfaces/i-datos-registro';
import { IFormInfo } from 'src/app/interfaces/i-form-info';
import { ITipoDeDocumento } from 'src/app/interfaces/i-tipo-de-documento';
import { AlertsService } from 'src/app/services/alerts.service';
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

  private datosRegistro: IDatosRegistro = null as any;

  constructor(
    private obser: VariablesGlobalesService,
    private http: HttpClient,
    private form: UntypedFormBuilder,
    private router: Router,
    private alertService: AlertsService
  ) {}

  ngOnInit() {
    this.asignarDatosPantalla();
    this.consultarDatosRegistro();
    this.consultarApi();
  }

  private consultarDatosRegistro(): void {
    this.obser
      .getData(EnumVariablesGlobales.DATOS_REGISTRO)
      .pipe(take(1))
      .subscribe(
        (res: IDatosRegistro) => {
          console.log('🚀 ~ InfoComponent ~ .subscribe ~ res:', res);
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

          this.datosRegistro = res;
        },
        (err: Error) => {
          throw new Error();
        }
      );
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
    this.obser.setData(EnumVariablesGlobales.URL_IMG_INFO_REGISTRO, 'coink');
  }

  private async consultarApi(): Promise<void> {
    let loading: HTMLIonLoadingElement = await this.alertService.loading(
      'Cargando'
    );
    loading.present();
    this.http
      .get('https://api.bancoink.biz/qa/signup/documentTypes?apiKey=030106')
      .subscribe(
        (res: any) => {
          this.tiposDeDocumento = res;
          loading.dismiss();
        },
        (error) => {
          loading.dismiss();
          this.alertService.alertBasic(
            'Error',
            '',
            'Error en la consulta de los documentos',
            ['Aceptar']
          );
          throw new Error('Error consultado los tipos de documento');
        }
      );
  }

  public clickSiguiente(): void {
    if (this.f.invalid) return;

    let data: IFormInfo = {
      tipoDocumento: this.tipoDocumento.value,
      numeroDocumento: this.numeroDocumento.value,
      fechaExpedicion: this.fechaExpedicion.value,
      fechaNacimiento: this.fechaNacimiento.value,
      genero: this.genero.value,
      correoElectronico: this.correoElectronico.value,
      confirmarCorreo: this.confirmarCorreo.value,
      pin: this.pin.value,
      confirmarPin: this.confirmarPin.value,
    };

    this.datosRegistro = { ...this.datosRegistro, ...data };

    this.obser.setData(
      EnumVariablesGlobales.DATOS_REGISTRO,
      this.datosRegistro
    );

    if (!this.validarIgualdadDatos()) return;

    this.router.navigate([`/${EnumPages.CONTRATO}`]);
  }

  public validarIgualdadDatos(): boolean {
    return (
      this.correoElectronico.value === this.confirmarCorreo.value &&
      this.pin.value === this.confirmarPin.value
    );
  }
}
