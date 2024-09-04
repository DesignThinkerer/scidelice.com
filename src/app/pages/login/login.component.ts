import { Component, Signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  profileForm!: FormGroup;
  firstnameSignal: Signal<any> | undefined;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
    });

    // firstNameSignal is created using the toSignal function.
    // represents the value of the 'firstName' form control.
    // so now instead of manually subscribing to the valueChanges of the form control, we can directly use the signal in our template
    this.firstnameSignal = toSignal(
      this.profileForm.get('firstname')?.valueChanges.pipe(debounceTime(300)) ??
        of(null),
      {}
    );
  }

  onSubmit() {
    console.log('submited values: ', this.profileForm.value);
  }
}
