import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyFormComponent } from './my-form/my-form.component';
import { AngularMaterialModule } from './common/angular-material/angular-material.module';
import { ScrollToInvalidDirective } from './common/directives/scroll-to-invalid.directive';
import { SetNonCanadianProfileComponent } from './set-non-canadian-profile/set-non-canadian-profile.component';
import { MaskItPipe } from './common/pipes/mask-it.pipe';
import { MyAccountsComponent } from './common/my-accounts/my-accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    ScrollToInvalidDirective,
    SetNonCanadianProfileComponent,
    MaskItPipe,
    MyAccountsComponent
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
