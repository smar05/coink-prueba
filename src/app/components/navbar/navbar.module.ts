import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [NavbarComponent],
})
export class NavbarModule {}
