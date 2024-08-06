import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatDrawer } from '@angular/material/sidenav';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { SearchBarComponent } from '../../../shared/ui/search-bar/search-bar.component';

@Component({
  selector: 'fcm-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatFormField,
    FormsModule,
    MatInput,
    MatLabel,
    SearchBarComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  drawer = input<MatDrawer>();
}
