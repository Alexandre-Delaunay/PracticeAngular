import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../services/prescription.service';
import { Prescription } from '../models/prescription';

@Component({
  selector: 'app-search-prescription',
  templateUrl: './search-prescription.component.html',
  styleUrls: ['./search-prescription.component.scss']
})

export class SearchPrescriptionComponent implements OnInit {

  constructor(private prescriptionService: PrescriptionService) { }

  ngOnInit(): void {
  }

  searchPrescription(): void {
      Prescription prescription = this.prescriptionService.get(referenceMimosa);
    };
}
