import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  /**
   * Alerta basica
   *
   * @param {string} header
   * @param {string} subHeader
   * @param {string} message
   * @param {string[]} buttons
   * @return {*}  {Promise<any>}
   * @memberof AlertsService
   */
  public async alertBasic(
    header: string,
    subHeader: string,
    message: string,
    buttons: string[]
  ): Promise<any> {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons,
    });

    return alert.present();
  }

  /**
   *
   *
   * @param {string} message
   * @param {number} [duration=null as any]
   * @return {*}  {Promise<any>}
   * @memberof AlertsService
   */
  public async loading(
    message: string,
    duration: number = null as any
  ): Promise<any> {
    const loading: HTMLIonLoadingElement = await this.loadingController.create({
      message,
      duration,
    });
    return loading;
  }
}
