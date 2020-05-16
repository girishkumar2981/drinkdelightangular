import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateorderComponent} from './updateorder/updateorder.component';
import{TrackorderComponent} from './trackorder/trackorder.component';
import{DisplaysupplierComponent} from './displaysupplier/displaysupplier.component';
import{DisplayorderComponent} from './displayorder/displayorder.component';
import{RawmaterialspecsComponent} from './rawmaterialspecs/rawmaterialspecs.component';
import{LoginComponent} from './login/login.component';
import{HomeComponent} from './home/home.component';
import{ProductspecsComponent} from './productspecs/productspecs.component';
import {UpdateporderComponent} from './updateporder/updateporder.component';
import{TrackporderComponent} from './trackporder/trackporder.component';
import{DisplayporderComponent} from './displayporder/displayporder.component';
import{DisplaydistributorComponent} from './displaydistributor/displaydistributor.component';
import{HomepageComponent} from './homepage/homepage.component';
import{CoverComponent} from './cover/cover.component';
const routes: Routes = [

  {path:'cover',component:CoverComponent,children:[
    {path:'home',component:HomeComponent,children:[
      {path:'updateorder',component:UpdateorderComponent},
      {path:'trackorder',component:TrackorderComponent},
      {path:'displaysupplier',component:DisplaysupplierComponent},
      {path:'displayorder',component:DisplayorderComponent},
      {path:'rawmaterialspecs',component:RawmaterialspecsComponent},
    ]},
    {path:'homepage',component:HomepageComponent,children:[
      {path:'productspecs',component:ProductspecsComponent},
      {path:'updateporder',component:UpdateporderComponent},
      {path:'trackporder',component:TrackporderComponent},
      {path:'displayporder',component:DisplayporderComponent},
      {path:'displaydistributor',component:DisplaydistributorComponent},
    ]},
]},
{path:'login',component:LoginComponent},
                      {path:'**',redirectTo:''}
                      
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
