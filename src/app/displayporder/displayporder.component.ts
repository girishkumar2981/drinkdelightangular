import { Component, OnInit } from '@angular/core';
import { ProductOrder } from '../Dto/ProductOrder';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayporder',
  templateUrl: './displayporder.component.html',
  styleUrls: ['./displayporder.component.css']
})
export class DisplayporderComponent implements OnInit {

  distributorId : String;
  deliverystatus : String;
  startDate : String;
  endDate : String;
  orders: ProductOrder[] = [];
  dis: boolean=false;
  constructor(private service: ServiceService,private router: Router) { }

  ngOnInit(): void {
  }
public displayOrder():void
{
  this.dis=true;
  console.log(this.startDate);
  console.log(this.endDate);
  console.log(this.distributorId);
  console.log(this.deliverystatus);

 this.service.displaypOrder(this.distributorId,this.deliverystatus,this.startDate,this.endDate).subscribe(data =>{
                                                        for(var i of data.orders)
                                                        {
                                                            this.orders.push(i);
                                                        }
                                                        console.log(data.orders);
 }); 
}
}
