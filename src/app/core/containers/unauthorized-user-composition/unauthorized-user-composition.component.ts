import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'fcm-unauthorized-user-composition',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './unauthorized-user-composition.component.html',
  styleUrl: './unauthorized-user-composition.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnauthorizedUserCompositionComponent {}
