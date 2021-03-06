import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44396/api/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }


  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarsdtobybrandid?id="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarsdtobycolorid?id="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByCarId(carId:number):Observable<SingleResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarsdtobycarid?id="+carId
    return this.httpClient.get<SingleResponseModel<Car>>(newPath)
  }
}
