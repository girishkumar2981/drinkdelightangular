import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { RawMaterialSpecs } from '../Dto/RawMaterialSpecs';

@Component({
  selector: 'app-rawmaterialspecs',
  templateUrl: './rawmaterialspecs.component.html',
  styleUrls: ['./rawmaterialspecs.component.css']
})
export class RawmaterialspecsComponent implements OnInit {
  dis: boolean=false;
  orders: RawMaterialSpecs[] = [];

  constructor(private service: ServiceService,private router: Router) { }

  ngOnInit(): void {
  }
  public displaySpecs():void
  {
 this.dis=true;
 this.service.displaySpecs().subscribe(data =>{
  for(var i of data.orders)
  {
      this.orders.push(i);
  }
  console.log(data.orders);
}); 
  }

}
