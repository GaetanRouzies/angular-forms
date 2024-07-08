import {Component, OnInit, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-reactive-form4',
  standalone: true,
  templateUrl: './template-driven-form4.component.html',
  imports: [FormsModule],
})
export class TemplateDrivenForm4Component implements OnInit {

  @ViewChild('formGroup', { static: true }) formGroup!: NgForm;
  price = 0;
  quantity = 0;

  totalPrice = 0;

  ngOnInit() {
    this.formGroup.form.valueChanges.subscribe((formGroupValue) => {
      console.log(formGroupValue);
      this.totalPrice = formGroupValue.price! * formGroupValue.quantity!;
    });
  }
}
