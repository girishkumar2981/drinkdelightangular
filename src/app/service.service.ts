import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpService: HttpClient) { }
  public updateOrder(orderId:number,deliverystatus:string) :Observable<String>
  {
      return this.httpService.put<String>('http://localhost:8195/Updatedeliverystatus/'+orderId+'/'+deliverystatus,null,{ responseType: 'text' as 'json'});
  }
  public displayOrder(supplierId:String,deliverystatus:String,startDate:String,endDate:String) :Observable<any>
  {
    return this.httpService.get<any>('http://localhost:8195/getrawmaterialorder/supplierid/'+supplierId+'/deliverystatus/'+deliverystatus+'/startDate/'+startDate+'/endDate/'+endDate);
  }
  public trackOrder(orderId:number) :Observable<any>
  {
    return this.httpService.get<any>('http://localhost:8195/trackorder/'+orderId);
  }
  public displaySupplier(supplierId:String) :Observable<any>
  {
    return this.httpService.get<any>('http://localhost:8091/GetSupplierDetail/'+supplierId);
  }
  public displaySpecs() :Observable<any>
  {
    return this.httpService.get<any>('http://localhost:8095/GetAllRawMaterialSpecs');
  }
}
