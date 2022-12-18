import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:5100/api";

  constructor(private http:HttpClient) { }

  // getallDistribustor():Observable<any[]>{
  //   return this.http.get<any>(this.APIUrl+'/distributor/getall')
  // }
  getallLoaisanpham():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/loaisanpham/getall')
  }
  getallSanpham():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/sanpham/getall')
  }
  getSanphamHot():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/sanpham/gethot')
  }
  getSanphambyID(id:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/sanpham/'+id)
  }
}
