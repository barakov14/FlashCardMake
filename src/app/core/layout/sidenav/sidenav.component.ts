import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatDrawer } from '@angular/material/sidenav';
import {
  MatList,
  MatListItem,
  MatListSubheaderCssMatStyler,
  MatNavList,
} from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'fcm-sidenav',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatList,
    MatListItem,
    MatNavList,
    MatDivider,
    MatListSubheaderCssMatStyler,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {}
