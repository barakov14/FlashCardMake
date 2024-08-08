import { inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { exhaustMap, filter, from, of, switchMap } from 'rxjs';
import { IAddFlashCardModule } from '../models/flashcard.model';
import { AuthService } from '../../../core/auth/services/auth.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Injectable()
export class FlashcardService {
  private readonly collectionName = 'flashcardModules';

  private readonly authService = inject(AuthService);
  private readonly firestore = inject(AngularFirestore);

  private readonly user$ = toObservable(this.authService.$user);

  addFlashCardModule(data: IAddFlashCardModule) {
    const dataId = this.firestore.createId();
    const dataWithId = { dataId, ...data };

    return this.user$.pipe(
      filter((user) => !!user),
      exhaustMap((user) =>
        from(
          this.firestore
            .collection(this.collectionName)
            .doc(user.uid)
            .collection('modules')
            .doc(dataId)
            .set(dataWithId),
        ),
      ),
    );
  }

  getUserModules() {
    return this.user$.pipe(
      filter((user) => !!user),
      switchMap((user) => {
        return this.firestore
          .collection(this.collectionName)
          .doc(user.uid)
          .collection('modules')
          .valueChanges();
      }),
    );
  }
}
