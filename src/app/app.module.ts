import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ConversorPipe } from './conversor.pipe';
import { FullNamePipe } from './sheared/pipes/full-name.pipe';
import { TeachersModule } from './modules/dashboard/pages/teachers/teachers.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
// import { rootReducer } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


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
    TeachersModule,
    // StoreModule.forRoot(rootReducer, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),

  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
