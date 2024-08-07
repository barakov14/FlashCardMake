import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'fcm-flashcard-remove-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
  ],
  template: `
    <h2 mat-dialog-title>Удалить карточку</h2>
    <mat-dialog-content> Вы точно хотите удалить карточку? </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Отмена</button>
      <button mat-button (click)="onSubmit()" cdkFocusInitial>Удалить</button>
    </mat-dialog-actions>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlashcardRemoveDialogComponent {
  private readonly data = inject(MAT_DIALOG_DATA);
  private readonly dialogRef: MatDialogRef<FlashcardRemoveDialogComponent> =
    inject(MatDialogRef);

  onSubmit() {
    this.dialogRef.close(this.data.id);
  }
}
