import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8094/api/v1/employees";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(emailid: string): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${emailid}`);
  }

  updateEmployee(emailid: string, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${emailid}`, employee);
  }

  deleteEmployee(emailid: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${emailid}`);
  }
}