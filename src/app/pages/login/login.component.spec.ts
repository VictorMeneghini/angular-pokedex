import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  class AuthServiceStub {
    signIn() {
      return {}
    }
  }

  class RouterStub {
    signIn() {
      return {}
    }
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        {provide: AuthService, useValue: AuthServiceStub},
        {provide: Router, useValue: RouterStub}
      ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render right number of inputs', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#loginFormGroup')
    console.log(formElement);
    
    const inputElements = formElement.querySelectorAll('input')
    expect(inputElements.length).toEqual(2)
    
  })

  it('should init the inputs with null values', () => {
    const loginFormGroup = component.loginFormGroup.value;
    console.dir(loginFormGroup);

    
    const loginFormValues = {
      username: null,
      password: null
    }

    console.dir(loginFormValues);
    expect(loginFormGroup).toEqual(loginFormValues)
  })
});
