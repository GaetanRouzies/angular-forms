import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-values',
  standalone: true,
  templateUrl: './reactive-form-values.component.html',
  imports: [ReactiveFormsModule],
})
export class ReactiveFormValuesComponent {

  constructor() {
    // Example 1 : By Default, a FormControl is nullable
    const firstname = new FormControl('John');
    firstname.value; // 'John' (type: string | null)
    firstname.value?.substring(1); // Error : Object is possibly 'null'

    firstname.reset();
    firstname.value; // null

    // Example 2 : We can create a nonNullable FormControl
    const lastname = new FormControl('John', { nonNullable: true });
    lastname.value; // 'John' (type: string)

    lastname.reset();
    lastname.value; // ''
    lastname.value.substring(1); // 'ohn'

    // Example 3 : FormGroup.value returns undefined when a FormControl is disabled
    const formGroup = new FormGroup({
      firstname: new FormControl('John', { nonNullable: true }),
      lastname: new FormControl('Doe', { nonNullable: true }),
    });

    formGroup.controls.firstname.disable();

    console.log(formGroup.value);
    // value: { firstname: undefined, lastname: 'Doe' }
    // type: { firstname?: string, lastname?: string }

    console.log(formGroup.getRawValue());
    // value: { firstname: 'John', lastname: 'Doe' }
    // type: { firstname: string, lastname: string }
  }

}
