import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import $ from "jquery";
import { AppRoutingModule } from './app-routing.module';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonService } from './common.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
