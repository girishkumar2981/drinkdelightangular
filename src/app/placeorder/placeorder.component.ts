import { Component, OnInit } from '@angular/core';
import { RawMaterialSpecs } from '../Dto/RawMaterialSpecs';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
  rawmaterialspecs:RawMaterialSpecs;
  quantity:number;
  constructor() { }

  ngOnInit(): void {
  }

}
