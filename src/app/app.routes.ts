import {Routes} from '@angular/router';
import {ReactiveForm1Component} from './reactive-form1/reactive-form1.component';
import {ReactiveForm2Component} from './reactive-form2/reactive-form2.component';
import {ReactiveForm3Component} from './reactive-form3/reactive-form3.component';
import {ReactiveForm4Component} from './reactive-form4/reactive-form4.component';
import {ReactiveFormValuesComponent} from './reactive-form-values/reactive-form-values.component';
import {TemplateDrivenForm1Component} from './template-driven-form1/template-driven-form1.component';
import {HtmlFormComponent} from './html-form/html-form.component';
import {TemplateDrivenForm2Component} from "./template-driven-form2/template-driven-form2.component";
import {TemplateDrivenForm3Component} from "./template-driven-form3/template-driven-form3.component";
import {TemplateDrivenForm4Component} from "./template-driven-form4/template-driven-form4.component";

export const routes: Routes = [
  {path: '', redirectTo: '/html-form', pathMatch: 'full'},
  {path: 'html-form', component: HtmlFormComponent},
  {path: 'template-driven-form1', component: TemplateDrivenForm1Component},
  {path: 'template-driven-form2', component: TemplateDrivenForm2Component},
  {path: 'template-driven-form3', component: TemplateDrivenForm3Component},
  {path: 'template-driven-form4', component: TemplateDrivenForm4Component},
  {path: 'reactive-form1', component: ReactiveForm1Component},
  {path: 'reactive-form2', component: ReactiveForm2Component},
  {path: 'reactive-form3', component: ReactiveForm3Component},
  {path: 'reactive-form4', component: ReactiveForm4Component},
  {path: 'reactive-form-values', component: ReactiveFormValuesComponent},
];
