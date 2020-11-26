import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Prescription } from '../models/prescription';
import { PrescriptionService } from '../services/prescription.service';

@Component({
  selector: 'app-search-prescription',
  templateUrl: './search-prescription.component.html',
  styleUrls: ['./search-prescription.component.scss']
})

export class SearchPrescriptionComponent implements OnInit {

  model = new Prescription();

  constructor(private prescriptionService: PrescriptionService) { }

  ngOnInit(): void {
  }

  searchPrescription() {

    console.log("Call prescriptionService.Get");

    this.prescriptionService.get(this.model.referenceMimosa).subscribe(
      x => this.model = x
    );

    console.log(this.model)
  }
}
