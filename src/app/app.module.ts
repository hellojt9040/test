import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyFormComponent } from './my-form/my-form.component';
import { AngularMaterialModule } from './common/angular-material/angular-material.module';
import { ScrollToInvalidDirective } from './common/directives/scroll-to-invalid.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    ScrollToInvalidDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
