import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { RegistroExitosoComponent } from './registro-exitoso.component';
import { RegistroExitosoRoutingModule } from './registro-exitoso-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroExitosoRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  declarations: [RegistroExitosoComponent],
})
export class RegistroExitosoComponentModule {}
