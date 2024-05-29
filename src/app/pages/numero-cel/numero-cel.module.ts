import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NumeroCelComponent } from './numero-cel.component';
import { NumeroCelRoutingModule } from './numero-cel-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, NumeroCelRoutingModule],
  declarations: [NumeroCelComponent],
})
export class NumeroCelComponentModule {}
