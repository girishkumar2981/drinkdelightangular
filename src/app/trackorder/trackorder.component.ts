import { Component, OnInit } from '@angular/core';
import { RawMaterialOrder } from '../Dto/RawMaterialOrder';
import { Router } from '@angular/router';
import { ServiceService} from '../service.service';
@Component({
  selector: 'app-trackorder',
  templateUrl: './trackorder.component.html',
  styleUrls: ['./trackorder.component.css']
})
export class TrackorderComponent implements OnInit {
orderId:number;
  dis: boolean=false;
  order: RawMaterialOrder[] = [];
  orders: any;
  message:String;
  constructor(private service: ServiceService,private router: Router) { }

  ngOnInit(): void {
  }
  public trackOrder():void
  {
    this.dis=true;
    console.log(this.orderId);
    this.service.trackOrder(this.orderId).subscribe(data => this.orders=data,error => this.message =error.error);
    
  }

}
