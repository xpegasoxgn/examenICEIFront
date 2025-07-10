import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatButtonModule } from '@angular/material/button';


import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';  // Importa el preset "Aura"
import { ButtonModule } from 'primeng/button';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout/main-layout.component';
import { TopBarComponent } from './components/layout/top-bar/top-bar/top-bar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar/sidebar.component';



//material

import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './components/pages/home/home/home.component';
//material

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    TopBarComponent,
    SidebarComponent,
    HomeComponent,
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  ButtonModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule,
  MatTableModule,
  MatSnackBarModule,
  MatDialogModule


  ],
  providers: [
    providePrimeNG({
      theme: { preset: Aura }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
