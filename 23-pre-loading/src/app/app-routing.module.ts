import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  { 
    path: 'products',
    loadChildren: () => import('./product/products.module').then(x => x.ProductsModule)
  },
  { 
    path: 'services',
    loadChildren: () => import('./services/services.module').then(x => x.ServicesModule)
  },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes,{
        preloadingStrategy: PreloadAllModules
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
