import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoRoutingModule,
    ComponentsModule,
  ],
  declarations: [InfoComponent],
})
export class IngresoComponentModule {}
