import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../courses.service';
import {Course} from '../model/course';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  courses: Course[];

  constructor(
      private coursesService: CoursesService,
      private navCtrl: NavController,
      ) {
  }


  ngOnInit() {
    this.coursesService.getCourses().subscribe(course => this.courses = course);
  }

  itemTapped(course: Course) {
      this.coursesService.course = course;
      this.navCtrl.navigateForward('tabs/tab3');
  }

}
