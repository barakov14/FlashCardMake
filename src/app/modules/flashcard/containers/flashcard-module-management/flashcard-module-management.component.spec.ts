import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardModuleManagementComponent } from './flashcard-module-management.component';

describe('FlashcardModuleCreateComponent', () => {
  let component: FlashcardModuleManagementComponent;
  let fixture: ComponentFixture<FlashcardModuleManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardModuleManagementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlashcardModuleManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
