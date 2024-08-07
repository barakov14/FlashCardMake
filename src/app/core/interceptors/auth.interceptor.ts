import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { filter, Observable, switchMap, tap } from 'rxjs';
import { inject } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { toObservable } from '@angular/core/rxjs-interop';

export const authInterceptor = (
  request: HttpRequest<any>,
  next: HttpHandlerFn,
): Observable<HttpEvent<any>> => {
  const authService = inject(AuthService);
  const user$ = toObservable(authService.$user);

  return user$.pipe(
    tap((user) => {
      console.log('Current user:', user);
    }),
    filter((user) => !!user),
    switchMap(() => {
      console.log('Requesting:', request.url);
      return next(request);
    }),
  );
};
