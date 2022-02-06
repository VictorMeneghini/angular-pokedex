import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormGroup: any;

  constructor(private formBuilder: FormBuilder, public authService: AuthService) { }

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

    this.authService.signIn(this.loginFormGroup.value.username, this.loginFormGroup.value.password)
  }
}
