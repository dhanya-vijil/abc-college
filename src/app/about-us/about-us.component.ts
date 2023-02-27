import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  allList:any;
  productList:any;
  page = 1;
  pageSize = 10;
  collectionSize:any;
  constructor( private apiService: ApiService) { }

  ngOnInit(): void {
    this.refreshCountries()
  }
  refreshCountries(){
    this.apiService.getTodos().subscribe(data => {
      console.log(data);
      this.allList = data;
      this.collectionSize = this.allList.length;
      this.productList = this.allList.map((list:any, i:any) => ({id: i + 1, ...list})).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    })
  }

}
