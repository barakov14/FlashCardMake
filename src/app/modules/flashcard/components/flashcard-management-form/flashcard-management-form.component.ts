import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import {
  MatButton,
  MatFabButton,
  MatIconButton,
} from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { NgForOf } from '@angular/common';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FlashcardRemoveDialogComponent } from './flashcard-remove-dialog/flashcard-remove-dialog.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'fcm-flashcard-management-form',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatCard,
    MatCardHeader,
    MatIconButton,
    MatDivider,
    MatCardContent,
    MatButton,
    ReactiveFormsModule,
    NgForOf,
    MatFabButton,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
  ],
  templateUrl: './flashcard-management-form.component.html',
  styleUrl: './flashcard-management-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlashcardManagementFormComponent {
  private readonly dialog = inject(MatDialog);
  private readonly destroyRef = inject(DestroyRef);
  private readonly cdr = inject(ChangeDetectorRef);

  flashCardForm = new FormBuilder().group({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    cards: new FormArray([
      new FormGroup({
        term: new FormControl(''),
        definition: new FormControl(''),
      }),
    ]),
  });

  get cards(): FormArray {
    return this.flashCardForm.get('cards') as FormArray;
  }

  onAddCard() {
    this.cards.push(
      new FormGroup({
        term: new FormControl(''),
        definition: new FormControl(''),
      }),
    );
  }

  onRemoveCard(index: number) {
    const dialogRef = this.dialog.open(FlashcardRemoveDialogComponent, {
      hasBackdrop: true,
      data: { id: index.toString() }, // Передайте индекс или идентификатор
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        if (result) {
          this.cards.removeAt(Number(result));
          this.cdr.markForCheck();
        }
      });
  }

  onSubmit() {
    console.log(this.flashCardForm.getRawValue());
  }

  onDrop(event: CdkDragDrop<FormGroup[]>) {
    const previousIndex = this.cards.controls.findIndex(
      (control) => control === event.item.data,
    );
    const currentIndex = event.currentIndex;

    // Only handle reordering if the position has changed
    if (previousIndex !== currentIndex) {
      const card = this.cards.at(previousIndex);
      this.cards.removeAt(previousIndex);
      this.cards.insert(currentIndex, card);
    }
  }
}
