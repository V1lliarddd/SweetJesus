import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICatering } from '../cateringInterface';

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
    return (
      this.catering.controls.firstName,
      this.catering.controls.lastName,
      this.catering.controls.emailAddress,
      this.catering.controls.phone,
      this.catering.controls.notes
    );
  }
  reviews: ICatering[] = [];
  submit() {
    this.reviews.push({
      firstName: this.catering.controls.firstName.value,
      lastName: this.catering.controls.lastName.value,
      email: this.catering.controls.emailAddress.value,
      phone: this.catering.controls.phone.value,
      notes: this.catering.controls.notes.value,
    });
    console.log(this.reviews);
    this.catering.reset()
  }
  constructor() {}
  ngOnInit() {}
}
