import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { WorkService } from '../services/work.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent {

  id:any
  employee:any

  constructor (private route:ActivatedRoute,private service:WorkService){

    this.id=route.snapshot.params["id"]
    service.retrieveEmployee(this.id).subscribe(data=>{
      this.employee=data
    })

  }

}
