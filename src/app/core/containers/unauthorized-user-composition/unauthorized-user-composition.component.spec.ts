import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedUserCompositionComponent } from './unauthorized-user-composition.component';

describe('UnauthorizedUserCompositionComponent', () => {
  let component: UnauthorizedUserCompositionComponent;
  let fixture: ComponentFixture<UnauthorizedUserCompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnauthorizedUserCompositionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnauthorizedUserCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
