import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchPrescriptionComponent } from '../../search-prescription/search-prescription.component';
import { PrescriptionRoutingModule } from './prescription-routing.module';

@NgModule({
  declarations: [SearchPrescriptionComponent],
  imports: [CommonModule, PrescriptionRoutingModule, FormsModule],
})
export class PrescriptionModule {}
