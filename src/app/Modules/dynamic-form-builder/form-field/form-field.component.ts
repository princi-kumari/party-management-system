import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-field.model';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {
  @Input() field: FormField;
  @Input() form: FormGroup; // Ensure this Input property is defined
}
