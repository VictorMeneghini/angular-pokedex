import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormGroup: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  private initLoginForm() {
    this.loginFormGroup = this.formBuilder.group({
      username: [null],
      password:  [null],
    });
  }

  public onSubmit() {
    console.log('On submit', {
      username: this.loginFormGroup.value.username,
      password: this.loginFormGroup.value.password
    })
  }
}
