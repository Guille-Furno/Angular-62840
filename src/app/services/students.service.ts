import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private studentUrl = 'assets/students.json';

  constructor(
    private http: HttpClient
  ) { }

  getStudents(): Observable<any[]>{
    return this.http.get<any[]>(this.studentUrl);
  }

  getStudentById(id:string): Observable<any>{
    return this.http.get<any[]>(this.studentUrl).pipe(
      map(students => students.find(student => student.id === id))
    );
  }

}
