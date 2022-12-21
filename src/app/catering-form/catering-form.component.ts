import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-catering-form',
  templateUrl: './catering-form.component.html',
  styleUrls: ['./catering-form.component.css'],
})
export class CateringFormComponent implements OnInit {
  catering = new FormGroup({
    firstName: new FormControl<string>('', [Validators.required]),
    lastName: new FormControl<string>('', [Validators.required]),
    emailAddress: new FormControl<string>('', [Validators.required]),
    phone: new FormControl<string>('', [Validators.required]),
    notes: new FormControl<string>('', [Validators.required]),
  });

  get() {
    return this.catering.controls.firstName, this.catering.controls.lastName;
  }

  submit() {
    console.log('1');
  }
  constructor() {}
  ngOnInit() {}
}
