import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// THIRD PARTY
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//FIREBASE CONFIG
export const firebaseConfig = {
  apiKey: "AIzaSyBd7plOHUGP4a861BT3H3oK18__K02Iho0",
  authDomain: "hackathonphase2.firebaseapp.com",
  databaseURL: "https://hackathonphase2.firebaseio.com",
  projectId: "hackathonphase2",
  storageBucket: "hackathonphase2.appspot.com",
  messagingSenderId: "266720782438"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig), // ADD THIS
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
