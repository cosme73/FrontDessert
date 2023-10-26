import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DessertComponent } from './components/dessert/dessert.component';
import { CreaeditaDessertComponent } from './components/dessert/creaedita-dessert/creaedita-dessert.component';
import { ReporteDessertComponent } from './components/reporte-dessert/reporte-dessert.component';
const routes: Routes = [
  {
    path: 'postres',
    component: DessertComponent,
    children: [
      { path: 'nuevo', component: CreaeditaDessertComponent },
      { path: 'ediciones/:id', component: CreaeditaDessertComponent },
      { path: 'reporte', component: ReporteDessertComponent }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
