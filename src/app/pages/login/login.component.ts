import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { NotificationService } from 'src/app/service/notification.service';
import { BAD_REQUESTS_ERROR } from '../../errors'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormGroup: any;
  public loadingButton: boolean = true
  public buttonIsDisabled: boolean = false  

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private notification: NotificationService) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  private initLoginForm() {
    this.loginFormGroup = this.formBuilder.group({
      username: [null, Validators.required],
      password:  [null, Validators.required],
    });
  }

  public onSubmit() {
    const {username, password} = this.loginFormGroup.value
    this.buttonIsDisabled = true;
    this.loadingButton = false
    
    this.authService.signIn(username, password)
      .then(() => {
        this.router.navigate([''])
      })
      .catch((error) => {        
        this.notification.error({
          title: 'Oops!',
          message: BAD_REQUESTS_ERROR[error.code] || BAD_REQUESTS_ERROR['generic-error']
        })
        this.buttonIsDisabled = false;
        this.loadingButton = true
      })
  }
}
