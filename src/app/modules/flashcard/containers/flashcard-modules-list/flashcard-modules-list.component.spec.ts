import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardModulesListComponent } from './flashcard-modules-list.component';

describe('FlashcardModulesListComponent', () => {
  let component: FlashcardModulesListComponent;
  let fixture: ComponentFixture<FlashcardModulesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardModulesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlashcardModulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
