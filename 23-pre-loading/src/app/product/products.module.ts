import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChargerComponent } from './charger/charger.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { ProductComponent } from './product.component';
import { TelevisionComponent } from './television/television.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { WatchComponent } from './watch/watch.component';
import { RouterModule, Routes } from '@angular/router';
import { DesignUtilityModule } from '../appModules/design-utility.module';

const proRoutes:Routes=[
  {path:'',component:ProductComponent, children:[
    {path:'laptop',component:LaptopComponent},
    {path:'mobile',component:MobileComponent},
    {path:'television',component:TelevisionComponent},
    {path:'washingmachine',component:WashingmachineComponent},
    {path:'charger',component:ChargerComponent},
    {path:'watch',component:WatchComponent}
  ]},
]
@NgModule({
  declarations: [
    ProductComponent,
    ChargerComponent,
    LaptopComponent,
    MobileComponent,
    TelevisionComponent,
    WashingmachineComponent,
    WatchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(proRoutes),
    DesignUtilityModule
  ]
})
export class ProductsModule { 
  constructor(){
    console.log('Products Module Loaded')
  }
}
