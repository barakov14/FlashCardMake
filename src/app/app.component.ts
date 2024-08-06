import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenavContainer,
} from '@angular/material/sidenav';
import { AuthComponent } from './core/auth/components/auth/auth.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { SidenavComponent } from './core/layout/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent,
    MatSidenavContainer,
    AuthComponent,
    HeaderComponent,
    SidenavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'my-app';
}
