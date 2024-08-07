import { Routes } from '@angular/router';
import { AuthGuard } from '@angular/fire/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './core/containers/unauthorized-user-composition/unauthorized-user-composition.component'
      ).then((c) => c.UnauthorizedUserCompositionComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./core/containers/landing-page/landing-page.component').then(
            (c) => c.LandingPageComponent,
          ),
      },
      {
        path: 'auth',
        loadComponent: () =>
          import('./core/auth/components/auth/auth.component').then(
            (c) => c.AuthComponent,
          ),
      },
    ],
  },
  {
    path: 'flashcard',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import(
        './core/containers/authorized-user-composition/authorized-user-composition.component'
      ).then((c) => c.AuthorizedUserCompositionComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './modules/flashcard/containers/flashcard-module-management/flashcard-module-management.component'
          ).then((c) => c.FlashcardModuleManagementComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];
