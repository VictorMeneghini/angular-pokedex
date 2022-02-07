import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signUpFormGroup: any;

  constructor(private formBuilder: FormBuilder, public authService: AuthService) { }

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
    const formData =  {
      username: this.signUpFormGroup.value.username.trim(),
      password: this.signUpFormGroup.value.password.trim(),
      terms: this.signUpFormGroup.value.terms
    }
    
    console.log(!!formData.username);
    
    if (!!formData.username && !!formData.password && formData.terms) {
      console.log('submit');
      this.authService.signUp(formData.username, formData.password)
    } else {
      console.log('error')
    }
  }
}
