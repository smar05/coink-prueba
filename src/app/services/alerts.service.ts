import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor(private alertController: AlertController) {}

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
}
