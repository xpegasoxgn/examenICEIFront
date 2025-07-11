import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

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
import { CrearComponent } from './components/pages/crud-mascota/crear/crear.component';
import { ListarComponent } from './components/pages/crud-mascota/listar/listar.component';
import { CrearComponent as CrearAdopcionComponent } from './components/pages/crud_adopcion/crear/crear.component';
import { ListarComponent as ListarAdopcionComponent} from './components/pages/crud_adopcion/listar/listar.component';




import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { EditarMascotaComponent } from './components/pages/crud-mascota/listar/editar-mascota/editar-mascota.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    TopBarComponent,
    SidebarComponent,
    HomeComponent,
    CrearComponent,
    ListarComponent,
    EditarMascotaComponent,
    CrearAdopcionComponent,
    ListarAdopcionComponent
  ],
  imports: [
    HttpClientModule,
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
  MatDialogModule,
  FormsModule,
  MatSelectModule,
  MatOptionModule


  ],
  providers: [
    providePrimeNG({
      theme: { preset: Aura }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
