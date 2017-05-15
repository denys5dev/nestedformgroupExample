import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      tableForm: new FormGroup({
        firsName: new FormControl()
      }),
      requestForm: new FormGroup({
        lastName: new FormControl
      })
    })
  }

  save(fr) {
    console.log(fr);
  }

 gotosecondtab(fn) {
    fn.ngSubmit.emit();
  }
}
