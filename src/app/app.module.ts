import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { UpdateorderComponent } from './updateorder/updateorder.component';
import { DisplayorderComponent } from './displayorder/displayorder.component';
import { TrackorderComponent } from './trackorder/trackorder.component';
import { DisplaysupplierComponent } from './displaysupplier/displaysupplier.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService} from './service.service';
import { RawmaterialspecsComponent } from './rawmaterialspecs/rawmaterialspecs.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductspecsComponent } from './productspecs/productspecs.component';
import { UpdateporderComponent } from './updateporder/updateporder.component';
import { DisplayporderComponent } from './displayporder/displayporder.component';
import { TrackporderComponent } from './trackporder/trackporder.component';
import { DisplaydistributorComponent } from './displaydistributor/displaydistributor.component';
import { CoverComponent } from './cover/cover.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaceorderComponent,
    UpdateorderComponent,
    DisplayorderComponent,
    TrackorderComponent,
    DisplaysupplierComponent,
    RawmaterialspecsComponent,
    LoginComponent,
    HomepageComponent,
    ProductspecsComponent,
    UpdateporderComponent,
    DisplayporderComponent,
    TrackporderComponent,
    DisplaydistributorComponent,
    CoverComponent,
    
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
