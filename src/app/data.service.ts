import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  dataArray: any[] = [];

  insertData(data: any) {
    this.dataArray.length = 0;
    this.dataArray.unshift(data);
  }

}
