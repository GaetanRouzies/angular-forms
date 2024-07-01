import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-1',
  standalone: true,
  templateUrl: './reactive-form-1.component.html',
  imports: [ReactiveFormsModule],
})
export class ReactiveForm1Component {
  formGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    age: new FormControl(0),
  });

  onSubmit() {
    console.log(this.formGroup.value); // { firstname: 'John', lastname: 'Doe', age: 30 }
  }
}
