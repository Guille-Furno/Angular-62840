import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from './models';
import { generateRandomString } from '../../../../shared/utils';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogFormComponent } from './components/student-dialog-form/student-dialog-form.component';
import { StudentsService } from '../../../../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {

  
  displayedColumns: string[] = ['id', 'name','actions'];
  // students: Student[] = [];

  editingStudentId: string | null = null;
  students:any[] = [];
  selectedStudent: any;

  constructor(
    private fb: FormBuilder, 
    private matDialog: MatDialog,
    private studentService: StudentsService
  ) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    })
  }

onDelete(id: string){
  if (confirm("Esta seguro?"))
  this.students = this.students.filter((student)=> student.id != id);
}

getStudentDetails(id:string){
  this.studentService.getStudentById(id).subscribe(student => {
    this.selectedStudent = student;
  })
}

onEdit(student: Student): void{
  console.log('Se va a ediar al estudiante:', student);
  this.editingStudentId = student.id;

  this.matDialog.open(StudentDialogFormComponent, {
    data: student,
  }).afterClosed().subscribe({
    next: (valorFormulario) => {
      if (!!valorFormulario) {
      this.students = this.students.map ((student)=> 
        student.id === this.editingStudentId 
      ? {...student, ...valorFormulario}
      : student
    );
    this.editingStudentId = null;
    }
  },
  });
}

onCreateStudent(): void{
  this.matDialog
  .open(StudentDialogFormComponent)
  .afterClosed()
  .subscribe({
    next: (valorFormulario) => {
      if (!!valorFormulario) {
      this.students = [  
        ...this.students,
        {
          id: generateRandomString(6),
        ...valorFormulario,
        }    
      ]
      }

    },
  });
}
}


