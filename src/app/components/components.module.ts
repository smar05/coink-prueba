import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoRegistroComponent } from './info-registro/info-registro.component';

@NgModule({
  declarations: [InfoRegistroComponent, NavbarComponent],
  exports: [NavbarComponent, InfoRegistroComponent],
  imports: [CommonModule, RouterModule],
})
export class ComponentsModule {}
