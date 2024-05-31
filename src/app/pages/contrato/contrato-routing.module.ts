import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratoComponent } from './contrato.component';

const routes: Routes = [
  {
    path: '',
    component: ContratoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratoRoutingModule {}
