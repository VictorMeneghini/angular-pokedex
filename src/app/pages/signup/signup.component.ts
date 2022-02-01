import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder } from '@angular/forms';
=======
import { FormBuilder, Validators } from '@angular/forms';
>>>>>>> cd4159faee7bceec85077cbecc9586d59652b305

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signUpFormGroup: any;

  constructor(private formBuilder: FormBuilder) { }

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
    } else {
      console.log('error')
    }
  }
}
