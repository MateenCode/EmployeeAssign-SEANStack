import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DataService } from '../../data.service';
import {Observable} from 'rxjs/Observable'
@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css'],
  encapsulation: ViewEncapsulation.None
})



export class AssignComponent implements OnInit {

  datas:string[] = [];;

  constructor(private dataService: DataService) { }



  ngOnInit() {

// setting data values to array values
    this.datas = this.dataService.dataArray



}

}
