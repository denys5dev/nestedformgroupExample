import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupName } from '@angular/forms';

@Component({
  selector: 'table-c',
  templateUrl: './table.component.html'
})
export class TableComponent {

  constructor(public formGroupName: FormGroupName) {
 
  }
}
