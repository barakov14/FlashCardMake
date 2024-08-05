import {inject, Injectable, Signal} from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, User } from '@angular/fire/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { ISignInRequest, ISignUpRequest } from '../models/auth.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable()

export class AuthService {
  private readonly auth = inject(Auth)

  $user: Signal<User | null> = toSignal(authState(this.auth), { initialValue: null });


  async signIn(data: ISignInRequest) {
    return await signInWithEmailAndPassword(this.auth, data.email, data.password);
  }

  async signUp(data: ISignUpRequest) {
    return await createUserWithEmailAndPassword(this.auth, data.email, data.password);
  }

  async signInWithGoogle() {
    return await signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  async signOut() {
    return await signOut(this.auth);
  }
}
