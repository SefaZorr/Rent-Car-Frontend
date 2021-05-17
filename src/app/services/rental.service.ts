import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44396/api/rentals/getbyrentaldetails"

  constructor(private httpClinet:HttpClient) { }

  getRentals():Observable<RentalResponseModel>{
    return this.httpClinet.get<RentalResponseModel>(this.apiUrl);
  }
  
}
