import { TestBed } from '@angular/core/testing';

import LoginDetectorGuard from './login-detector.guard';

describe('LoginDetectorGuard', () => {
  let guard: LoginDetectorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginDetectorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
