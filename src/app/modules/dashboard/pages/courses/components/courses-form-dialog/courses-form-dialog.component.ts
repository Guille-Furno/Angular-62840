import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../models';

interface CoursesFormDialogData {
  editingCourse?: Course;
}

@Component({
  selector: 'app-courses-form-dialog',
  templateUrl: './courses-form-dialog.component.html',
  styleUrl: './courses-form-dialog.component.scss'
})
export class CoursesFormDialogComponent {
  courseForm: FormGroup;

  constructor (
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef <CoursesFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: CoursesFormDialogData
    )  
    {
      this.courseForm = this.fb.group({
        name: ['', [Validators.required]],
      });

      if (!!data && !!data.editingCourse) {
        this.courseForm.patchValue(data.editingCourse);
      }
    }

  onConfirm (): void {
  if (this.courseForm.invalid) {
    this.courseForm.markAllAsTouched();
  } else {

    this.matDialogRef.close(this.courseForm.value)
    }
  }
}
