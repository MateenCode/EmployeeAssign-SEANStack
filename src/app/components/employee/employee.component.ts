import { Component, OnInit, ViewEncapsulation, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
encapsulation: ViewEncapsulation.None
})
export class EmployeeComponent implements OnInit {

  employees: any
  employeeTask: any
  task: any
  data: any[] = [];

  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/employee').subscribe(data => {
      this.employees = data
      this.getTotal()
    });

  }
      getTotal(){
        let total = 0;
        for(let i = 0; i < this.employees.length;i++){
      // grabbing each client balance and storing in total variable
          total += parseFloat(this.employees[i].totalTask)
        }
          this.task = total;
      }


      getDetail(event){
        this.http.get(`http://localhost:3000/assign/${event.target.id}`).subscribe(data => {
            this.employeeTask = data
      // inserting data values to array
          this.dataService.insertData(data)
        });
      }



}
