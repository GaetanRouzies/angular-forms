import { Routes } from '@angular/router';
import { ReactiveForm1Component } from './reactive-form-1/reactive-form-1.component';
import { ReactiveForm2Component } from './reactive-form-2/reactive-form2.component';
import { ReactiveForm3Component } from './reactive-form-3/reactive-form3.component';
import { ReactiveForm4Component } from './reactive-form-4/reactive-form4.component';
import { ReactiveFormValuesComponent } from './reactive-form-values/reactive-form-values.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { HtmlFormComponent } from './html-form/html-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/html-form', pathMatch: 'full' },
  { path: 'html-form', component: HtmlFormComponent },
  { path: 'template-driven-form', component: TemplateDrivenFormComponent },
  { path: 'reactive-form-1', component: ReactiveForm1Component },
  { path: 'reactive-form-2', component: ReactiveForm2Component },
  { path: 'reactive-form-3', component: ReactiveForm3Component },
  { path: 'reactive-form-4', component: ReactiveForm4Component },
  { path: 'reactive-form-values', component: ReactiveFormValuesComponent },
];
