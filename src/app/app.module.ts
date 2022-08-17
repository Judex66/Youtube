import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './core/components/header/header.component';
import FilterBlockComponent from './core/components/filter-block/filter-block.component';
import ResultsssComponent from './core/components/resultsss/resultsss.component';

import ResultItemComponent from './core/components/resultsss/result-item/result-item.component';
import TimeColorDirective from './core/components/time-color.directive';
import LoginPgaeComponent from './auth/components/login-pgae/login-pgae.component';
import FullInfoComponent from './core/components/resultsss/full-info/full-info.component';
import FunctionService from './core/services/function.service';
import MistakePageComponent from './core/components/mistake-page/mistake-page.component';
import PostpageComponent from './auth/postpage/postpage.component';
import RegistrComponent from './auth/components/registr/registr.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterBlockComponent,
    ResultsssComponent,
    ResultItemComponent,
    TimeColorDirective,
    LoginPgaeComponent,
    FullInfoComponent,
    MistakePageComponent,
    PostpageComponent,
    RegistrComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    OrderModule,
  ],
  providers: [FunctionService],
  bootstrap: [AppComponent],
})
export default class AppModule {
}
