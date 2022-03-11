import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.css']
})
export class FormFilterComponent implements OnInit {

  formFilter: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.createFormFilter();
  }

  createFormFilter() {
    this.formFilter = new FormGroup({
      fechaIngreso: new FormControl(''),
      nombreUsuProducto: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.formFilter.valid) {
      
    }
  }

}
