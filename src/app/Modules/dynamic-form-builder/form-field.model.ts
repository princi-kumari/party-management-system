// src/app/models/form-field.model.ts

export type FieldType = 'text' | 'textarea' | 'select' | 'checkbox' | 'radio';

export interface FormField {
  placeholder?: string;
  value?: any;
  validations?: Validation[];
  type: string; // Ensure 'radio' is set here for radio buttons
  label: string;
  name: string;
  options: { value: any, label: string }[];
}

export interface Validation {
  name: string;
  validator: any;
  message: string;
}
