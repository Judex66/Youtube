import { ComponentFixture, TestBed } from '@angular/core/testing';

import LoginPgaeComponent from './login-pgae.component';

describe('LoginPgaeComponent', () => {
  let component: LoginPgaeComponent;
  let fixture: ComponentFixture<LoginPgaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPgaeComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPgaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
