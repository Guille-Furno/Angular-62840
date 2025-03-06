import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../../core/services/courses.service';
import { Course } from './models';
import { __values } from 'tslib';
import { MatDialog } from '@angular/material/dialog';
import { CoursesFormDialogComponent } from './components/courses-form-dialog/courses-form-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit{
  isLoading= false;

  dataSource: Course[]=[];

  constructor (
    private courseService: CoursesService,
    private matDialog: MatDialog
  ) {}

  handleCoursesUpdate (data: Course[]): void{
    this.dataSource = [...data];
  }

  openFormDialog(editingCourse?:Course ): void{
    this.matDialog.open(CoursesFormDialogComponent, {data: {editingCourse}})
    .afterClosed()
    .subscribe({
      next: (data) =>{
        if (!!data){
          if (!!editingCourse){
            this.updateCourse (editingCourse.id, data);
          }else{

          this.addCourse(data);
        }
        }
      },
    });
  }

  updateCourse (id:string, data: {name:string}) {
    this.isLoading = true;
    this.courseService.updateCourseById(id,data).subscribe({
      next: (data) => this.handleCoursesUpdate (data),
      error: (err) => (this.isLoading = false),
      complete: () => (this.isLoading = false),
  })
  }
  addCourse (data: {name: string}): void {
    this.isLoading = true;
    this.courseService.addCourse(data).subscribe({
      next: (data) => this.handleCoursesUpdate (data),
      error: (err) => (this.isLoading = false),
      complete: () => (this.isLoading = false),
    });
  }

  ngOnInit(): void {
  this.isLoading = true

    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.dataSource = [...data];
      },
      error: ()=>{
        this.isLoading = false;
      },
      complete: ()=>{
        this.isLoading = false;
      },
    });
  }

  onDelete (id:string): void {
    if(confirm ("Estas seguro?")){
      this.courseService.deleteCourseById(id).subscribe({
        next: (data) => {}
      })
    }
  }

}
