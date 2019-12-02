import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'portofolio',
  loadChildren: () => import('./pages/portofolio/portofolio.module').then(mod => mod.PortofolioModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
