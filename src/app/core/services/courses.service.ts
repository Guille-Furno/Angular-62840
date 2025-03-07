import { Injectable } from "@angular/core";
import { concat, concatMap, delay, Observable, of } from "rxjs";
import { Course } from "../../modules/dashboard/pages/courses/models";
import { generateRandomString } from "../../shared/utils";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment.development";

// let MY_FAKE_DATABASE: Course[]=[
//     {
//         id: generateRandomString (6),
//         name: "Ingles"
//         },
//         {
//         id: generateRandomString (6),
//         name: "Portugues"
//         } ,
//         {
//         id: generateRandomString (6),
//         name: "Italiano"
//         }
// ];

@Injectable ({ providedIn: 'root'})
export class CoursesService {

    constructor (private hhtpClient: HttpClient) {}

    getCourseDetail(id: string): Observable<Course>{
        return this.hhtpClient.get<Course> (
            `${environment.baseApiUrl} /courses/${id}?embed=teachers`
        );
        }
    

    updateCourseById (id: string, data: {name: string}) : Observable<Course[]> {
        return this.hhtpClient.patch<Course>(`${environment.baseApiUrl}/courses`, data).pipe(concatMap(()=> this.getCourses()));

    }
   
    addCourse(payload: {name:string}): Observable <Course[]> {

        return (this.hhtpClient.post<Course>(`${environment.baseApiUrl}/courses`, payload).pipe(concatMap(()=> this.getCourses())));
    }
   
    getCourses(): Observable <Course[]> {
        return this.hhtpClient.get<Course[]>(`${environment.baseApiUrl}/courses`);
    }

    deleteCourseById(id: string) : Observable<Course[]>{
        return (this.hhtpClient.delete<Course>(`${environment.baseApiUrl}/courses/${id}`)
        .pipe(concatMap(()=> this.getCourses()))
        );
    }
}