import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExibicaoComponent } from './pages/exibicao/exibicao.component';
import { HomeComponent } from './pages/home/home.component';
import { GeneroComponent } from './pages/genero/genero.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'exibicao', component: ExibicaoComponent},
  { path: 'home', component: HomeComponent},
  { path: 'genero', component: GeneroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
