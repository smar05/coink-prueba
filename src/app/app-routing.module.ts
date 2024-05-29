import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EnumPages } from './enums/enum-pages';

const routes: Routes = [
  {
    path: EnumPages.HOME,
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: EnumPages.INGRESO,
    loadChildren: () =>
      import('./pages/ingreso/ingreso.module').then(
        (m) => m.IngresoComponentModule
      ),
  },

  {
    path: EnumPages.SPLASH,
    loadChildren: () =>
      import('./pages/splash/splash.module').then(
        (m) => m.SplashComponentModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
