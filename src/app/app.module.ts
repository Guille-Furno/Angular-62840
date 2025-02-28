import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ConversorPipe } from './conversor.pipe';
import { FullNamePipe } from './sheared/pipes/full-name.pipe';

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
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
