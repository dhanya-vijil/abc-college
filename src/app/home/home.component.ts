import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allList:any;
  productList:any;
  page = 1;
  pageSize = 4;
  collectionSize:any;
  constructor( private apiService: ApiService) { }

  ngOnInit(): void {
    this.refreshCountries()
  }
  refreshCountries(){
    this.apiService.getProducts().subscribe(list => {
      console.log(list);
      this.allList = list;
      this.collectionSize = this.allList.data.length;
      this.productList = this.allList.data.map((list:any, i:any) => ({id: i + 1, ...list})).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    })
  }

}
