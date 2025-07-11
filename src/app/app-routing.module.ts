import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home/home.component'; 
import { CrearComponent } from './components/pages/crud-mascota/crear/crear.component';
import { ListarComponent } from './components/pages/crud-mascota/listar/listar.component';
const routes: Routes = [
   { path:'', redirectTo:'auth/login', pathMatch:'full'}, //principal
   {path:'auth', loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
   { path: 'home',component:HomeComponent },
   { path:'crud-mascota/crear', component:CrearComponent},
  { path: 'crud-mascota/listar', component: ListarComponent },
   {path:'**',redirectTo:'auth/login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
