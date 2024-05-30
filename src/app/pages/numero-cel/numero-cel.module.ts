import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumeroCelComponent } from './numero-cel.component';
import { NumeroCelRoutingModule } from './numero-cel-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumeroCelRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  declarations: [NumeroCelComponent],
})
export class NumeroCelComponentModule {}
