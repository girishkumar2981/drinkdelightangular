import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService} from '../service.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { RawMaterialOrder } from '../Dto/RawMaterialOrder';
@Component({
  selector: 'app-displayorder',
  templateUrl: './displayorder.component.html',
  styleUrls: ['./displayorder.component.css']
})
export class DisplayorderComponent implements OnInit {
  supplierId : String;
  deliverystatus : String;
  startDate : String;
  endDate : String;
  orders: RawMaterialOrder[] = [];
  dis: boolean=false;
  constructor(private service: ServiceService,private router: Router) { }

  ngOnInit(): void {
  }
public displayOrder():void
{
  this.dis=true;
  console.log(this.startDate);
  console.log(this.endDate);
  console.log(this.supplierId);
  console.log(this.deliverystatus);

 this.service.displayOrder(this.supplierId,this.deliverystatus,this.startDate,this.endDate).subscribe(data =>{
                                                        for(var i of data.orders)
                                                        {
                                                            this.orders.push(i);
                                                        }
                                                        console.log(data.orders);
 }); 
}
}