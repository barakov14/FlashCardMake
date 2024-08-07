import { inject, Injectable, Signal } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from '@angular/fire/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { ISignInRequest, ISignUpRequest } from '../models/auth.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  $user: Signal<User | null> = toSignal(authState(this.auth), {
    initialValue: null,
  });

  signIn(data: ISignInRequest) {
    return from(
      signInWithEmailAndPassword(this.auth, data.email, data.password),
    );
  }

  signUp(data: ISignUpRequest) {
    return from(
      createUserWithEmailAndPassword(this.auth, data.email, data.password),
    );
  }

  signInWithGoogle() {
    return from(signInWithPopup(this.auth, new GoogleAuthProvider()));
  }

  signOut() {
    return from(
      signOut(this.auth).then(() => {
        this.router.navigate(['/auth']);
      }),
    );
  }
}
