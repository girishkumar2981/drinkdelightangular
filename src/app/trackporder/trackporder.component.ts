import { Component, OnInit } from '@angular/core';
import { ProductOrder } from '../Dto/ProductOrder';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trackporder',
  templateUrl: './trackporder.component.html',
  styleUrls: ['./trackporder.component.css']
})
export class TrackporderComponent implements OnInit {

  orderId:number;
  dis: boolean=false;
  order: ProductOrder[] = [];
  orders: any;
  constructor(private service: ServiceService,private router: Router) { }

  ngOnInit(): void {
  }
  public trackOrder():void
  {
    this.dis=true;
    console.log(this.orderId);
    this.service.trackpOrder(this.orderId).subscribe(data => this.orders=data);
    
  }

}
