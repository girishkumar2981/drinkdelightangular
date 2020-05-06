import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-updateorder',
  templateUrl: './updateorder.component.html',
  styleUrls: ['./updateorder.component.css']
})
export class UpdateorderComponent implements OnInit {
orderId:number;
deliverystatus:string;
message:String;

  constructor(private service: ServiceService,private router: Router) { }

  ngOnInit(): void {

  }
  updateOrder(): any
{
   return this.service.updateOrder(this.orderId,this.deliverystatus).subscribe(data => this.message =data,error => this.message =error.error);
}
}
