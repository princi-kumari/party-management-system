import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { user: User }
  ) {
    this.userForm = this.fb.group({
      id: [data.user.id],  // ID is not editable
      name: [data.user.name, [Validators.required, Validators.minLength(3)]],
      email: [data.user.email, [Validators.required, Validators.email]],
      role: [data.user.role, [Validators.required]]
    });
   }

  // cancel user
  CancelUser(): void {
    this.dialogRef.close();
  }

  // save user
  SaveUser(): void {
    if (this.userForm.valid) {
      this.dialogRef.close(this.userForm.value);
      }
    }

  ngOnInit(): void {
  }

}
