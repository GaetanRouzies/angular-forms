import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-template-driven-form2',
  standalone: true,
  templateUrl: './template-driven-form2.component.html',
  imports: [FormsModule, NgIf, ReactiveFormsModule],
})
export class TemplateDrivenForm2Component {
  comment = '';

  onSubmit() {
    console.log('Comment:', this.comment);
  }
}
