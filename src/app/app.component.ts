import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { PopularMoviesPageComponent } from './pages/popular-movies-page/popular-movies-page.component';
import { FavoriteMovieComponent } from './pages/favorite-movie-page/favorite-movies.component';
import { AbstractControl, FormControl, FormGroup, FormsModule, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    PopularMoviesPageComponent,
    RouterOutlet,
    CommonModule,
    SidebarComponent,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    FavoriteMovieComponent,
    FormsModule,
    ReactiveFormsModule]
})
export class AppComponent implements OnInit {
  reactiveForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', { validators: [Validators.required, this.createPasswordStrengthValidator.bind(this)] }),
      confirmPass: new FormControl('', [Validators.required])
    }, { validators: this.customPasswordMatching.bind(this) })


    this.reactiveForm.valueChanges.subscribe(formValue => {
      console.log('formValue', formValue);
    })
  }

  public customPasswordMatching(control: AbstractControl): ValidationErrors | null {
    const password = this.reactiveForm.get('password')?.value;
    const confirmPassword = this.reactiveForm.get('confirmPass')?.value;

    return password === confirmPassword ? null : { passwordMismatchError: true };
  }
  createPasswordStrengthValidator(control: AbstractControl) {
    const hasLowerCase = /[a-z]+/.test(control.value);
    const hasUpperCase = /[A-Z]+/.test(control.value);
    const hasNumeric = /[0-9]+/.test(control.value);
    const userPasswordValid = hasUpperCase && hasLowerCase && hasNumeric;

    return !userPasswordValid ? { passwordStrength: true } : null;
  }

  onSubmitReactiveForm() {

    console.log(this.reactiveForm)

  }





  // name: any = "Paolo";
  // errorClass: string = ''

  // onSubmit(form: NgForm) {
  //   console.log(form.value)
  //   if (form.controls['name'].status === "INVALID" && form.controls['name'].touched) {
  //     this.errorClass = 'nameInvalid'
  //   }
  // }
}
