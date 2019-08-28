import {Component, OnInit} from '@angular/core';
import {CoursesService} from "../courses.service";
import {Course} from "../model/course";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  courses: Course[];

  constructor(private coursesService: CoursesService) {
  }


  ngOnInit() {
    this.coursesService.getCourses().subscribe(course => this.courses = course);
  }

}
