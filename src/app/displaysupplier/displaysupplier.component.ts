import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { DisplaySupplier } from '../Dto/DisplaySupplier';

@Component({
  selector: 'app-displaysupplier',
  templateUrl: './displaysupplier.component.html',
  styleUrls: ['./displaysupplier.component.css']
})
export class DisplaysupplierComponent implements OnInit {
supplierId: string;
order: DisplaySupplier[] = [];
  dis: boolean=false;
  orders: any;
  message:String;
  constructor(private service: ServiceService,private router: Router) { }

  ngOnInit(): void {
  }
public displaySupplier(): void
{
this.dis=true;
console.log(this.supplierId);
this.service.displaySupplier(this.supplierId).subscribe(data => this.orders=data,error => this.message =error.error);
  
}
}
