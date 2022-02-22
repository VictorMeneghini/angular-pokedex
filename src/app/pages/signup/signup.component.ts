import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { NotificationService } from 'src/app/service/notification.service';
import { BAD_REQUESTS_ERROR } from '../../errors'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signUpFormGroup: any;
  public loadingButton: boolean = true
  public buttonIsDisabled: boolean = false  

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private notification: NotificationService,
    private router: Router) { }

  ngOnInit(): void {
    this.initSignupForm();
  }

  private initSignupForm() {
    this.signUpFormGroup = this.formBuilder.group({
      username: [''],
      password:  [''],
      terms: [false, ]
    });
  }

  public onSubmit() {
    this.buttonIsDisabled = true;
    this.loadingButton = false
    
    const formData =  {
      username: this.signUpFormGroup.value.username.trim(),
      password: this.signUpFormGroup.value.password.trim(),
      terms: this.signUpFormGroup.value.terms
    }
        
    if (!!formData.username && !!formData.password && formData.terms) {
      this.authService.signUp(formData.username, formData.password)
        .then(() => {
          this.notification.success({
            title: 'Welcome!',
            message: 'New pokemon trainer successfully registered',
          })
          this.router.navigate(['login'])
        })
        .catch((error) => {
          console.log(error)
          this.notification.error({
            title: 'Wait a moment!',
            message: BAD_REQUESTS_ERROR[error.code] || error.message
          })
          this.loadingButton = true
          this.buttonIsDisabled = false;
        })
    } else {
      console.log('error')
    }
  }
}
