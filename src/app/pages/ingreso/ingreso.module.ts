import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IngresoComponent } from './ingreso.component';
import { IngresoRoutingModule } from './ingreso-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, IngresoRoutingModule],
  declarations: [IngresoComponent],
})
export class IngresoComponentModule {}
