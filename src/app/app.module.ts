import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { DemoService } from './demo.service';
import { HttpClientModule ,HttpHeaders} from '@angular/common/http';

import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderModule } from 'ngx-order-pipe';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
// for Router import:
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    LoginComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      progressAnimation: 'decreasing',
      closeButton:true
    }),
    OrderModule,
    NgxSpinnerModule,
       // for Router use:
    LoadingBarRouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
