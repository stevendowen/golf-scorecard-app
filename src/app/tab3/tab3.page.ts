import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../courses.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../model/course';
import {NavController} from '@ionic/angular';

import {Observable} from 'rxjs';
import {Player} from '../model/player';
import {FormBuilder, FormControl} from '@angular/forms';
import {Score} from '../model/score';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  private player$: Observable<Player[]>;
  private courseData: Course;
  private newScoreCtrl = new FormControl();
  private total: number = 0;


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
      private navCtrl: NavController,
      private fb: FormBuilder,
  ) {
  }

  ngOnInit() {

    const selectedCourseId = this.courseId;

    this.coursesService.getCourse(selectedCourseId).subscribe(data => this.courseData = data);
    this.player$ = this.coursesService.getPlayersData();
    // this.createForm(this.player$);
  }

  itemTapped() {
    this.navCtrl.navigateBack('tabs/tab1');
  }

  // addScore(playerId: number, val) {
  //   console.log(val);
  //   let total = this.score;
  //   total += +val;
  //   console.log(total);
  //   document.querySelectorAll('#p{{playerId}}h{val}')
  // }

  // createForm(player: any) {
  //   player.forEach(control => control.fb.addControl('', this.fb.control('')))
  // }

  saveScore(player: Player) {
    let score = +this.newScoreCtrl.value;
    this.total += score;
    this.coursesService.addScore(player, this.total);
    }

}
