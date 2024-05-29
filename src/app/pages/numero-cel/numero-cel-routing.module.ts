import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumeroCelComponent } from './numero-cel.component';

const routes: Routes = [
  {
    path: '',
    component: NumeroCelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumeroCelRoutingModule {}
