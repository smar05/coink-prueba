import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroExitosoComponent } from './registro-exitoso.component';

const routes: Routes = [
  {
    path: '',
    component: RegistroExitosoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroExitosoRoutingModule {}
