import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ComponenteAComponent } from './componentes/componente-a/componente-a.component';
import { ComponenteBComponent } from './componentes/componente-b/componente-b.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'componentA',
    component: ComponenteAComponent
  },
  {
    path: 'componentB',
    component: ComponenteBComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
