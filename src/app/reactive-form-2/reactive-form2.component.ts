import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form-2',
  standalone: true,
  templateUrl: './reactive-form2.component.html',
  imports: [ReactiveFormsModule, CommonModule],
})
export class ReactiveForm2Component {
  formGroup = new FormGroup({
    comment: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  onSubmit() {
    console.log(this.formGroup.value); // { firstname: 'John', lastname: 'Doe', age: 30 }
  }
}
