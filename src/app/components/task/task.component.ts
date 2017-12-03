import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  TaskTotal: number;
  tasks: any;
  employees:any;


  hide:boolean = false;


  show(){
    this.hide = !this.hide;
  }



  assign(event){
    const body = {name: `${event.target.name}`};
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    headers.append('Accept', 'application/json');
    return this.http.post(`http://localhost:3000/assign/${event.target.id}`, body).subscribe()
  }





  constructor(
    private http: HttpClient
  ) {}


  ngOnInit(): void {

    this.TaskTotal = 4;

    this.http.get('http://localhost:3000/task').subscribe(data => {
      return this.tasks = data;
    });



    this.http.get('http://localhost:3000/employee').subscribe(data => {
      this.employees = data
    });




  }
}
