import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnumPages } from 'src/app/enums/enum-pages';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss'],
})
export class IngresoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public registro(): void {
    this.router.navigate([`/${EnumPages.NUMERO_CEL}`]);
  }
}
