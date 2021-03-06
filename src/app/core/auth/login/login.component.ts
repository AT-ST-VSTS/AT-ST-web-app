import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

import { AuthService } from '../auth.service';
import { LoginModel, LoginExternalModel } from '../auth.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;
  hide = true;

  loginForm: FormGroup;

  constructor(public authService: AuthService, public router: Router, private fb: FormBuilder) {
    this.setMessage();

    this.loginForm = this.fb.group({
      email: ['', Validators.required && Validators.email ],
      password: ['', Validators.required ],
      rememberMe: false,
    });

  }

  ngOnInit() {
  }

  onLoginSubmit() {
    const loginFormModel = this.loginForm.value;

    const login: LoginModel = {
      email: loginFormModel.email,
      password: loginFormModel.password,
      rememberMe: loginFormModel.rememberMe,
    };

    this.message = 'Trying to log in ...';

    this.authService.login(login).subscribe(() => {

      this.setMessage();

      if (this.authService.isLoggedIn) {

        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }

  onLoginReset() {
    this.loginForm.reset({
      email: '',
      password: '',
      rememberMe: false,
    });
  }


  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }



  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
