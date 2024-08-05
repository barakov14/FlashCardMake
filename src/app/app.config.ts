import {ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyBunD-mVDDO4JTWb2GJLsGhWmP3DL0t6AQ",
      authDomain: "flashcardmake.firebaseapp.com",
      projectId: "flashcardmake",
      storageBucket: "flashcardmake.appspot.com",
      messagingSenderId: "150294929447",
      appId: "1:150294929447:web:0b553da494025c9393ae02",
      measurementId: "G-32TBQC8RX8"
    })),
    provideHttpClient(),
    provideFirestore(() => getFirestore())
  ]
};
