import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatButtonModule } from '@angular/material/button';


import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';  // Importa el preset "Aura"
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MatButtonModule
  ],
  providers: [
    providePrimeNG({
      theme: { preset: Aura }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
