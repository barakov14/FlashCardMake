import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlashcardManagementFormComponent } from '../../components/flashcard-management-form/flashcard-management-form.component';
@Component({
  selector: 'fcm-flashcard-module-management',
  standalone: true,
  imports: [FlashcardManagementFormComponent],
  templateUrl: './flashcard-module-management.component.html',
  styleUrl: './flashcard-module-management.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlashcardModuleManagementComponent {}
