import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'ordonnance',
    loadChildren: () =>
      import('./main/prescription/prescription.module').then(
        (m) => m.PrescriptionModule
      ),
    canLoad: [],
  },
  {
    path: '**',
    redirectTo: '/ordonnance',
    pathMatch: 'full',
  },
];

export const routing = RouterModule.forRoot(appRoutes);
