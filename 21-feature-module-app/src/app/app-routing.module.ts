import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { TelevisionComponent } from './product/television/television.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { ChargerComponent } from './product/charger/charger.component';
import { WatchComponent } from './product/watch/watch.component';
import { ServicesComponent } from './services/services.component';
import { ItservicesComponent } from './services/itservices/itservices.component';
import { AccountservicesComponent } from './services/accountservices/accountservices.component';
import { SocialservicesComponent } from './services/socialservices/socialservices.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  // {path:'products', children:[
  //   {path:'', component:ProductComponent},
  //   {path:'laptop',component:LaptopComponent},
  //   {path:'mobile',component:MobileComponent},
  //   {path:'television',component:TelevisionComponent},
  //   {path:'washingmachine',component:WashingmachineComponent},
  //   {path:'charger',component:ChargerComponent},
  //   {path:'watch',component:WatchComponent}
  // ]},
  // {path:'services', children:[
  //   {path:'', component:ServicesComponent},
  //   {path:'information-technology',component:ItservicesComponent},
  //   {path:'account',component:AccountservicesComponent},
  //   {path:'social',component:SocialservicesComponent},
  // ]},
  // {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
