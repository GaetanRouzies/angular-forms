import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form2',
  standalone: true,
  templateUrl: './template-driven-form2.component.html',
  imports: [FormsModule],
})
export class TemplateDrivenForm2Component {
  firstname = '';
  lastname = '';
  age = 0;

  onSubmit() {
    console.log('firstname', this.firstname);
    console.log('lastname', this.lastname);
    console.log('age', this.age);
  }
}
