import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './search/search.component';
import { ResultadoComponent } from './resultado/resultado.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'registro', component: RegistroComponent},
{path: 'resultado', component: ResultadoComponent},
{path: '**', component: HomeComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
