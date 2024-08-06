import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  MatError,
  MatFormField,
  MatLabel,
  MatSuffix,
} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ISignInRequest, ISignUpRequest } from '../../models/auth.model';
import { AuthMode } from '../../models/auth.enum';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'fcm-auth',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    MatIcon,
    MatIconButton,
    MatSuffix,
    ReactiveFormsModule,
    MatError,
    MatTabGroup,
    MatTab,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  private readonly authService = inject(AuthService);

  $errors = signal<string | null>(null);
  $hide = signal(true);
  $isSignUpMode = signal<boolean>(false);

  togglePasswordVisibility(event: MouseEvent) {
    this.$hide.set(!this.$hide());
    event.stopPropagation();
  }

  authForm = new FormBuilder().group({
    email: new FormControl('123456@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('123456', [Validators.required]),
  });

  onAuthUser() {
    if (this.authForm.valid) {
      const formData = this.authForm.getRawValue();
      const authOperation = this.$isSignUpMode()
        ? this.authService.signUp(formData as ISignUpRequest)
        : this.authService.signIn(formData as ISignInRequest);

      authOperation
        .then((response) => {
          console.log(
            this.$isSignUpMode()
              ? 'Registration successful'
              : 'Sign-in successful',
            response,
          );
        })
        .catch((error) => {
          this.$errors.set(error.message);
        });
    }
  }

  onSignInWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then((response) => {
        this.authForm.reset();
      })
      .catch((error) => {
        this.$errors.set(error.message);
      });
  }

  onSwitchMode() {
    this.$isSignUpMode.update(() => !this.$isSignUpMode());
    this.$errors.set(null);
    this.authForm.reset();
  }

  protected readonly AuthMode = AuthMode;
}
