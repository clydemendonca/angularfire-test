import { Component } from '@angular/core';

// ANGULAR IMPORTS
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  trucks: FirebaseListObservable<any>;
  name: any;
  msgVal: string = '';

  constructor(db: AngularFireDatabase) {
    // this.user = afAuth.authState;
    this.trucks = db.list('trucks');
  }

}
