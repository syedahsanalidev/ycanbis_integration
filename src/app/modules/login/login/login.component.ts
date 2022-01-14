import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { faUserLock, faUserPlus, faEnvelope, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/helper/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faUserLock = faUserLock;
  faUserPlus =faUserPlus;
  faEnvelope = faEnvelope;
  faSignInAlt = faSignInAlt;

  loginForm: FormGroup = new FormGroup({});

  constructor(private _titleService: Title,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    //private tokenService: TokenService,
    private _router: Router

  ) {

  }



  ngOnInit(): void {
    this._titleService.setTitle("User Login");
    this.initLoginForm();
    this.checkForLoginAndNavigateToMyAccount();
  }

  /**
   * Check and navigate on login page
   */
  checkForLoginAndNavigateToMyAccount() {
    // if (!this.tokenService.isTokenExpired()) {
    //   this._router.navigate(["/ycb/my-account"]);
    // }
  }

  /**
  * Initializing login form 
  */
  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  /**
   * Submit lgoin form
   */
  isLoginFormSubmitted = false;
  errorMessage = null;
  successMessage: any = null;
  submitLoginForm() {
    this.errorMessage = null;
    this.successMessage = null;
    if (this.loginForm.valid) {
      this.isLoginFormSubmitted = true;
      this.loginService.login(this.loginForm.value).subscribe(
        (loginedUser: any) => {
          let { token } = loginedUser;
          //this.tokenService.saveToken(token);
          this._router.navigate(["/ycb/my-account"]);
          this.isLoginFormSubmitted = false;
        }, (errors: any) => {
          let { message } = errors;
          this.errorMessage = message;
          this.isLoginFormSubmitted = false;
        })
    }
  }

}
