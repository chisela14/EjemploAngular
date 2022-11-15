import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlumnosModule } from './alumnos/alumnos.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlumnosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
