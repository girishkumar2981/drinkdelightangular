import { Component, OnInit } from '@angular/core';
import { ProductSpecs } from '../Dto/ProductSpecs';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productspecs',
  templateUrl: './productspecs.component.html',
  styleUrls: ['./productspecs.component.css']
})
export class ProductspecsComponent implements OnInit {

  dis: boolean=false;
  orders: ProductSpecs[] = [];
  renderer:boolean = false;
  productspes:ProductSpecs;
  quantityvalue : number;
  constructor(private service: ServiceService,private router: Router) { }

  ngOnInit(): void {
  }
  public displaySpecs():void
  {
 this.dis=true;
 this.service.displaypSpecs().subscribe(data =>{
  for(var i of data)
  {
      this.orders.push(i);
  }
  console.log(data);
}); 
  }

  public orderPlaced(productspes:ProductSpecs):void
  {
    this.productspes = productspes;
    this.renderer = true;
  }

  public placedorder():void
  {
    this.service.placedorder2(this.productspes,this.quantityvalue).subscribe(data => console.log(data));
  }

}
