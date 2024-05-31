import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { AlertsService } from './alerts.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private alertsService: AlertsService) {}

  public get(url: string): Observable<any> {
    return this.http.get(url).pipe(
      catchError((err): any => {
        this.alertsService.alertBasic(
          'Error',
          '',
          'Error en la consulta de los documentos',
          ['Aceptar']
        );
      })
    );
  }
}
