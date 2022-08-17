import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import LoginPgaeComponent from './auth/components/login-pgae/login-pgae.component';
import RegistrComponent from './auth/components/registr/registr.component';
import PostpageComponent from './auth/postpage/postpage.component';
import LoginDetectorGuard from './auth/services/login-detector.guard';
import MistakePageComponent from './core/components/mistake-page/mistake-page.component';
import FullInfoItemComponent from './core/components/resultsss/full-info/full-info.component';
import ResultsssComponent from './core/components/resultsss/resultsss.component';

const routes: Routes = [
  { path: '', component: LoginPgaeComponent, canDeactivate: [LoginDetectorGuard] },
  { path: 'post', component: PostpageComponent },
  { path: 'registration', component: RegistrComponent },
  { path: 'main', component: ResultsssComponent },
  { path: 'main/fullinfo/:id', component: FullInfoItemComponent },
  { path: 'fullinfo/:id', component: FullInfoItemComponent },
  { path: '**', component: MistakePageComponent }];// СТРАНИЦА ОШИБКИ ВСЕГДА ПОСЛЕДНЯЯ!!!

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
