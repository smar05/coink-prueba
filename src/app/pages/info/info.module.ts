import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, InfoRoutingModule],
  declarations: [InfoComponent],
})
export class IngresoComponentModule {}
