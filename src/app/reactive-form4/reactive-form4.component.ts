import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form4',
  standalone: true,
  templateUrl: './reactive-form4.component.html',
  imports: [ReactiveFormsModule, CommonModule],
})
export class ReactiveForm4Component {
  formGroup = new FormGroup({
    price: new FormControl(0),
    quantity: new FormControl(0),
  });

  totalPrice = 0;

  constructor() {
    this.formGroup.valueChanges.subscribe((formGroupValue) => {
      this.totalPrice = formGroupValue.price! * formGroupValue.quantity!;
    });
  }
}
