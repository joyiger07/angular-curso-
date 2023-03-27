import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { SeriesComponent } from './series/series.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutesModule } from './routes/routes.module';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';


  const firebaseConfig = {
      apiKey: "AIzaSyCvd-UZjPTR7Bw0oaq8p1uv-4uIPT1qPIU",
      authDomain: "pelisup-428d3.firebaseapp.com",
      projectId: "pelisup-428d3",
      storageBucket: "pelisup-428d3.appspot.com",
      messagingSenderId: "387687270744",
      appId: "1:387687270744:web:fa9bed2c9b503333957d2d"
  };


  @NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        InicioComponent,
        SeriesComponent,


    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      SharedModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      AngularFireAuthModule,
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),




    ],
    providers: [
      {provide: FIREBASE_OPTIONS, useValue: firebaseConfig}
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule {

  }
