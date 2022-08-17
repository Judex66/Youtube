import { Injectable } from '@angular/core';
import {
  CanDeactivate, UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import LoginPgaeComponent from '../components/login-pgae/login-pgae.component';

@Injectable({
  providedIn: 'root',
})
export default class LoginDetectorGuard implements CanDeactivate<LoginPgaeComponent> {
  // eslint-disable-next-line class-methods-use-this
  canDeactivate(
    component:LoginPgaeComponent,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.validCheck();
  }
}
