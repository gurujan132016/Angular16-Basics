import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountservicesComponent } from './accountservices/accountservices.component';
import { ItservicesComponent } from './itservices/itservices.component';
import { ServicesComponent } from './services.component';
import { SocialservicesComponent } from './socialservices/socialservices.component';
import { RouterModule, Routes } from '@angular/router';
import { DesignUtilityModule } from '../appModules/design-utility.module';

const serviceRoutes:Routes=[
  {path:'',component:ServicesComponent, children:[
    {path:'information-technology',component:ItservicesComponent},
    {path:'account',component:AccountservicesComponent},
    {path:'social',component:SocialservicesComponent},
  ]}
]

@NgModule({
  declarations: [
    ServicesComponent,
    ItservicesComponent,
    AccountservicesComponent,
    SocialservicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(serviceRoutes),
    DesignUtilityModule
  ]
})
export class ServicesModule { 
  constructor(){
    console.log('Service Module Loaded')
  }
}
