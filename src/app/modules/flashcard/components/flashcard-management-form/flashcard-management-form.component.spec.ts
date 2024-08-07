import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardManagementFormComponent } from './flashcard-management-form.component';

describe('FlashcardManagementFormComponent', () => {
  let component: FlashcardManagementFormComponent;
  let fixture: ComponentFixture<FlashcardManagementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardManagementFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlashcardManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
