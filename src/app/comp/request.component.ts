import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupName } from '@angular/forms';
@Component({
  selector: 'request-c',
  templateUrl: './request.component.html'
})
export class RequestComponent {
   constructor(public formGroupName: FormGroupName) {
 
  }
}
