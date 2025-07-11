import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home/home.component'; 
import { CrearComponent } from './components/pages/crud-mascota/crear/crear.component';
import { ListarComponent } from './components/pages/crud-mascota/listar/listar.component';
import { ListarComponent as ListarAdopcionComponent } from './components/pages/crud_adopcion/listar/listar.component';
import { CrearComponent as CrearAdopcionComponent } from './components/pages/crud_adopcion/crear/crear.component';

const routes: Routes = [
   { path:'', redirectTo:'home', pathMatch:'full'}, //principal
   { path: 'home',component:HomeComponent },
   { path:'crud-mascota/crear', component:CrearComponent},
  { path: 'crud-mascota/listar', component: ListarComponent },
   { path: 'crud-adopcion/listar', component: ListarAdopcionComponent },
  { path: 'crud-adopcion/crear', component: CrearAdopcionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
