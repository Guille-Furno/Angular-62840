import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ConversorPipe } from './conversor.pipe';
import { FullNamePipe } from './sheared/pipes/full-name.pipe';
import { HttpClientModule } from '@angular/common/http';
import { TeachersModule } from './modules/dashboard/pages/teachers/teachers.module';

@NgModule({
  declarations: [
    AppComponent,
    ConversorPipe,
    FullNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    HttpClientModule,
    TeachersModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
