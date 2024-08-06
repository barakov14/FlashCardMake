import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardModuleComponent } from './flashcard-module.component';

describe('FlashcardModuleComponent', () => {
  let component: FlashcardModuleComponent;
  let fixture: ComponentFixture<FlashcardModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
