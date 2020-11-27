import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchPrescriptionComponent } from '../../search-prescription/search-prescription.component';

const routes = [
  {
    path: '',
    component: SearchPrescriptionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrescriptionRoutingModule {}
