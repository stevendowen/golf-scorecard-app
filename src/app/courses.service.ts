import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {Course} from "./model/course";
import {HttpClient} from "@angular/common/http";
import {Courses} from "./model/courses";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Observable<Course[]>;
  courseUrl = environment.courseUrl;

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Courses>(this.courseUrl).pipe(map(courses => courses.courses));
  }
}
