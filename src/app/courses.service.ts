import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {Course} from './model/course';
import {HttpClient} from '@angular/common/http';
import {Courses} from './model/courses';
import {map} from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreCollection, DocumentChangeAction} from '@angular/fire/firestore';
import {Player} from './model/player';
import {Score} from './model/score';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  course: Course;
  courseData: Course;
  courseUrl = environment.courseUrl;

  private playersCollection: AngularFirestoreCollection<Player>;

  constructor(private http: HttpClient, private db: AngularFirestore) {
    this.playersCollection = this.db.collection<Player>('Players');
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Courses>(this.courseUrl).pipe(map(courses => courses.courses));
  }

  getCourse(courseId): Observable<Course> {
    return this.http.get<Course>(`${this.courseUrl}/${courseId}`).pipe(map(course => {
      console.log(course);
      this.courseData = course;
      return this.courseData;
    }));
  }


  getPlayersData(): Observable<Player[]> {
    return this.playersCollection.snapshotChanges()
        .pipe(
            map((players: DocumentChangeAction<Player>[]): Player[] => {
              return players.map((player: DocumentChangeAction<Player>): Player => {
                return {
                  id: player.payload.doc.id,
                  name: player.payload.doc.data().name,
                  scores: player.payload.doc.data().scores,
                };
              });
            })
        );
  }

  savePlayer(player: Player) {
    this.playersCollection.add(player)
        .then(_ => console.log('add successful'))
        .catch(error => console.log('add', error));
  }

  addScore(player: Player, updatedScore: number) {
    console.log(player.scores);
    this.playersCollection.doc(player.id).update({scores: updatedScore})
        .then(_ => console.log('success'))
        .catch(error => console.log('failed', error));

  }
}
