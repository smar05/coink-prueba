import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { ContratoRoutingModule } from './contrato-routing.module';
import { ContratoComponent } from './contrato.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContratoRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  declarations: [ContratoComponent],
})
export class ContratoComponentModule {}
