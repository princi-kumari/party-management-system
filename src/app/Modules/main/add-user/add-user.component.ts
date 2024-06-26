import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  user: User = { id: 0, name: '', email: '', role: '' };
  userForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  // Save(): void {
  //   this.dialogRef.close(this.user);
  // }

  // Cancel user
  Cancel(): void {
    this.dialogRef.close();
  }

    // save user
  onSaveClick(): void {
    if (this.userForm.valid) {
      this.dialogRef.close(this.userForm.value);
      // this.dialogRef.close(this.user);

    }
  }

}
