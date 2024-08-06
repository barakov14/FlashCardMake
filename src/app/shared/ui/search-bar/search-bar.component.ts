import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'fcm-search-bar',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {}
