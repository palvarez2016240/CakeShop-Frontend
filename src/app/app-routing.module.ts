import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { CatalogoComponent } from './Components/catalogo/catalogo.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { OfertasComponent } from './Components/ofertas/ofertas.component';


const routes: Routes = [
  {path: 'Inicio', component: InicioComponent},
  {path: 'Oferas', component: OfertasComponent},
  {path: 'Catalogo', component: CatalogoComponent},
  {path: 'SobreNosotros', component: AboutComponent},
  {path: '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
