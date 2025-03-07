import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { Course } from '../../models';
import { AuthService } from '../../../../../../core/services/auth.service';
import { map, Observable } from 'rxjs';



@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrl: './courses-table.component.scss'
})
export class CoursesTableComponent {
  @Input()
  dataSource: Course[] = [];

  @Output()
  delete = new EventEmitter<string>()

  @Output()
  edit = new EventEmitter<Course>()


  displayedColumns = ['id', 'name', 'actions'];

  isAdmin$: Observable<boolean>;

  constructor (private authService: AuthService) {
    this.isAdmin$ = this.authService.isAdmin$;
  }
}

