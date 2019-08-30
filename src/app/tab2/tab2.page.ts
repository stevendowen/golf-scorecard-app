import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../courses.service';
import {Observable} from 'rxjs';
import {Player} from '../model/player';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  private player$: Observable<Player[]>;
  newPlayerCtrl = new FormControl();

  constructor(
      private coursesService: CoursesService
      ) {}

  ngOnInit() {
    this.player$ = this.coursesService.getPlayersData();
    // this.playerName = this.fb.control('', Validators.required);
  }

  savePlayer() {
    if (this.newPlayerCtrl.value) {
      this.coursesService.savePlayer({name: this.newPlayerCtrl.value, score: []});
    }
  }

}
