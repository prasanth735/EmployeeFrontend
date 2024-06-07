import { Component } from '@angular/core';
import { WorkService } from '../services/work.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {

  employee:any
  constructor(private service:WorkService){
    this.ngOnInit()
  }


  ngOnInit(){
    this.service.listEmployee().subscribe(data=>this.employee=data)

  }

  handleDelete(id:any){
    this.service.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      
    })
  }



}
