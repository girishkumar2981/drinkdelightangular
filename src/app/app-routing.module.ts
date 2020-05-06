import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateorderComponent} from './updateorder/updateorder.component';
import{TrackorderComponent} from './trackorder/trackorder.component';
import{DisplaysupplierComponent} from './displaysupplier/displaysupplier.component';
import{DisplayorderComponent} from './displayorder/displayorder.component';
import{RawmaterialspecsComponent} from './rawmaterialspecs/rawmaterialspecs.component';
const routes: Routes = [
  {path:'updateorder',component:UpdateorderComponent},
  {path:'trackorder',component:TrackorderComponent},
  {path:'displaysupplier',component:DisplaysupplierComponent},
  {path:'displayorder',component:DisplayorderComponent},
  {path:'rawmaterialspecs',component:RawmaterialspecsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
