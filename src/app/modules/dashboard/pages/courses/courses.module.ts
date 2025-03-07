import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CoursesFormDialogComponent } from './components/courses-form-dialog/courses-form-dialog.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesTableComponent,
    CoursesFormDialogComponent,
    CourseDetailComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    MatTooltipModule,
  ]
})
export class CoursesModule { }
