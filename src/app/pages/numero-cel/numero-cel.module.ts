import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumeroCelComponent } from './numero-cel.component';
import { NumeroCelRoutingModule } from './numero-cel-routing.module';
import { InfoRegistroComponent } from 'src/app/components/info-registro/info-registro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumeroCelRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [NumeroCelComponent, InfoRegistroComponent],
})
export class NumeroCelComponentModule {}
