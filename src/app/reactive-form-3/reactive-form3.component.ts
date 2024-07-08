import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form-3',
  standalone: true,
  templateUrl: './reactive-form3.component.html',
  imports: [ReactiveFormsModule, CommonModule],
})
export class ReactiveForm3Component {
  formGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    comment: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  isInvalidAndTouchedOrDirty(formControl: FormControl) {
    return formControl.invalid && (formControl.touched || formControl.dirty);
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return;
    }
    console.log(this.formGroup.value);
  }

}
