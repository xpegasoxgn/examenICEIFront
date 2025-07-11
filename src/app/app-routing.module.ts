import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home/home.component'; 
import { CrearComponent } from './components/pages/crud-mascota/crear/crear.component';
import { ListarComponent } from './components/pages/crud-mascota/listar/listar.component';

const routes: Routes = [
   { path:'', redirectTo:'home', pathMatch:'full'}, //principal
   { path: 'home',component:HomeComponent },
   { path:'crud-mascota/crear', component:CrearComponent},
  { path: 'crud-mascota/listar', component: ListarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
