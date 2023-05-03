import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponenteComponent } from './componentes/mi-componente/mi-componente.component';
import { MiComponente2Component } from './componentes/mi-componente2/mi-componente2.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    MiComponente2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
