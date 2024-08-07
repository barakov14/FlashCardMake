import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedUserCompositionComponent } from './authorized-user-composition.component';

describe('AuthorizedUserCompositionComponent', () => {
  let component: AuthorizedUserCompositionComponent;
  let fixture: ComponentFixture<AuthorizedUserCompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorizedUserCompositionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthorizedUserCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
