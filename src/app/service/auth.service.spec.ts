import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

class MockAuthService extends AuthService {
  isAuthenticated() {
    return "Mocked";
  }
}

describe('AuthService', () => {
  let service: any;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: AuthService, useValue: MockAuthService}
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
