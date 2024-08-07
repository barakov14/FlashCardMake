import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
} from '@angular/material/sidenav';
import { SidenavComponent } from '../../layout/sidenav/sidenav.component';
import { RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'fcm-authorized-user-composition',
  standalone: true,
  imports: [
    HeaderComponent,
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent,
    SidenavComponent,
    RouterOutlet,
    MatButton,
  ],
  templateUrl: './authorized-user-composition.component.html',
  styleUrl: './authorized-user-composition.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizedUserCompositionComponent {
  private readonly authService = inject(AuthService);

  onLogout() {
    this.authService.signOut().subscribe();
  }
}
