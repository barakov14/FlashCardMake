import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FlashcardManagementFormComponent } from '../../components/flashcard-management-form/flashcard-management-form.component';
import { IAddFlashCardModule } from '../../models/flashcard.model';
import { FlashcardService } from '../../services/flashcard.service';
@Component({
  selector: 'fcm-flashcard-module-management',
  standalone: true,
  imports: [FlashcardManagementFormComponent],
  templateUrl: './flashcard-module-management.component.html',
  styleUrl: './flashcard-module-management.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FlashcardService],
})
export class FlashcardModuleManagementComponent implements OnInit {
  private readonly flashcardService = inject(FlashcardService);

  onAddFlashCardModule(data: IAddFlashCardModule) {
    this.flashcardService.addFlashCardModule(data).subscribe(() => {
      console.log('Success');
    });
  }

  ngOnInit() {
    this.flashcardService.getUserModules().subscribe((v) => {
      console.log('modules', v);
    });
  }
}
