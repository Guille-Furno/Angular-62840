import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { Course } from '../../models';

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


  displayedColumns = ['id', 'name', 'actions'];
}
