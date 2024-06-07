import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(private http:HttpClient) { 

  }

  listEmployee(){
    return this.http.get("http://127.0.0.1:8000/api/employee/")
  }


  retrieveEmployee(id:any){
    return this.http.get(`http://127.0.0.1:8000/api/employee/${id}`)
  }

  createEmployee(data:any){
    return this.http.post(`http://127.0.0.1:8000/api/employee/`,data)
  }

  updateEmployee(id:any,data:any){
    return this.http.put(`http://127.0.0.1:8000/api/employee/${id}`,data)
  }

  deleteEmployee(id:any){
    return this.http.delete(`http://127.0.0.1:8000/api/employee/${id}`)
  }
}
