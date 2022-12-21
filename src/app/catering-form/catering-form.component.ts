import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-catering-form',
  templateUrl: './catering-form.component.html',
  styleUrls: ['./catering-form.component.css'],
})
export class CateringFormComponent implements OnInit {
  catering = new FormGroup({
    firstName: new FormControl<string>(''),
    lastName: new FormControl<string>(''),
    emailAddress: new FormControl<string>(''),
    phone: new FormControl<string>(''),
    notes: new FormControl<string>(''),
  });
  submit() {
    console.log('1');
  }
  constructor() {}
  ngOnInit() {}
}
