import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { NgifNgforComponent } from './ngif-ngfor/ngif-ngfor.component';


const routes: Routes = [
  { path: 'componente-inicial', component: DataBindingComponent },
  { path: 'segundo-componente', component: SegundoComponenteComponent },
  { path: 'ngif-ngfor', component: NgifNgforComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
