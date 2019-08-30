import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../courses.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../model/course';
import {NavController} from '@ionic/angular';
import * as _ from 'lodash';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  courseData: Course;
  courseName: any;

  get course(): string {
    if (!this.coursesService.course.name) {
      return this.coursesService.course.name;
    }
    return this.coursesService.course.name;
  }

  get courseId(): number {
    if (!this.coursesService.course.id) {
      return this.coursesService.course.id;
    }
    return this.coursesService.course.id;
  }

  constructor(
      private coursesService: CoursesService,
      private route: ActivatedRoute,
      private navCtrl: NavController
      ) {}

  async ngOnInit() {
    const selectedCourseId = this.courseId;

    this.coursesService.getCourse(selectedCourseId).subscribe(data => this.courseData = data);

  }

  itemTapped() {
    this.navCtrl.navigateBack('tabs/tab1');
  }
}
