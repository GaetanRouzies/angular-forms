import {Component, ViewChild} from '@angular/core';
import {FormControl, FormsModule, NgForm} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-template-driven-form3',
  standalone: true,
  templateUrl: './template-driven-form3.component.html',
  imports: [FormsModule, CommonModule],
})
export class TemplateDrivenForm3Component {

  @ViewChild('ngForm') ngForm!: NgForm;
  title = '';
  comment = '';

  isInvalidAndTouchedOrDirty(formControl: FormControl) {
    return formControl.invalid && (formControl.touched || formControl.dirty);
  }

  onSubmit() {
    this.ngForm.form.markAllAsTouched();
    if (this.ngForm.form.invalid) {
      return;
    }
    console.log(this.ngForm.form.value);
  }

}
