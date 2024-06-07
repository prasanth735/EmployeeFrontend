import { Component } from '@angular/core';
import { WorkService } from '../services/work.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  constructor(private service:WorkService){

  }

  employeeForm=new FormGroup(
    {
      name:new FormControl("",Validators.required),
      dept:new FormControl("",Validators.required),
      phone:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      salary:new FormControl("",Validators.required),
    }
  )

  handlesubmit(){
    let formdata=this.employeeForm.value
    this.service.createEmployee(formdata).subscribe(data=>{
      console.log(data);
      
    })

  }

}
