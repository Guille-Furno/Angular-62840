import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../../../../core/services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent implements OnInit {

  isLoading = false;
  course: Course | null = null;

  errorMensage =''

  constructor (private coursesService: CoursesService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.coursesService.getCourseDetail(
      this.activatedRoute.snapshot.params['id']
    ).subscribe ({
      next: (course) => {
        this.course = course;
        this.errorMensage = '';
      },
      complete: () => {
        this.isLoading = false
      },
      error: (error) => {
        this.isLoading = false;

        if (error instanceof HttpErrorResponse) {
          if (error.status === 404) {
            this.errorMensage = 'El curso no existe';
          } 
        }
        },
      
    });

  }
}
