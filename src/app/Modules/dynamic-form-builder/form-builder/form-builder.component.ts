// src/app/form-builder/form-builder.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormField } from '../form-field.model';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent {
  form: FormGroup;
  fields: FormField[] = [];

  newField: FormField = {
    type: 'text',
    label: '',
    name: '',
    placeholder: '',
    options: [],
    value: '',
    validations: []
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fields: this.fb.array([]),
    });
  }

  get fieldsFormArray(): FormArray {
    return this.form.get('fields') as FormArray;
  }

  addField(field: FormField) {
    if (!field.label?.trim() || !field.placeholder?.trim()) {
      console.error('Label and Placeholder cannot be empty.');
      return;
    }

    const control = this.fb.control(
      field.value,
      field.validations?.map(v => v.validator) || []
    );
    this.fieldsFormArray.push(control);
    this.fields.push(field);

    // Reset newField after adding to fields
    this.newField = {
      type: 'text',
      label: '',
      name: '',
      placeholder: '',
      options: [],
      value: '',
      validations: []
    };
  }

  removeField(index: number) {
    this.fieldsFormArray.removeAt(index);
    this.fields.splice(index, 1);
  }

  getFormGroupAtIndex(index: number): FormGroup {
    return this.fieldsFormArray.at(index) as FormGroup;
  }
 
 

  submitForm() {
    if (this.form.invalid) {
      console.log('Form is invalid. Please fix errors.');
      this.form.markAllAsTouched();
      return;
    } else {
      console.log('Form is valid. Submitting:', this.form.value);
      alert('Form is successfully submitted');
    
    }
  }
}
