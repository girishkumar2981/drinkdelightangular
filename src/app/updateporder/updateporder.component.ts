import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateporder',
  templateUrl: './updateporder.component.html',
  styleUrls: ['./updateporder.component.css']
})
export class UpdateporderComponent implements OnInit {

  orderId:number;
deliverystatus:string;
message:String;

  constructor(private service: ServiceService,private router: Router) { }

  ngOnInit(): void {

  }
  updateOrder(): any
{
   return this.service.updatepOrder(this.orderId,this.deliverystatus).subscribe(data => this.message =data,error => this.message =error.error);
}
}

