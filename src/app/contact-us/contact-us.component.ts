import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  allList: any;
  collectionSize: any;
  usersList: any;
  page: number = 1;
  pageSize: number = 4;


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.refreshCountries()
  }
  refreshCountries() {
   this.api.getusers().subscribe(list => {
     console.log(list);
     this.allList = list;
     this.collectionSize = this.allList.data.length;
     this.usersList = this.allList.data.map((list:any, i:any) => ({id: i + 1, ...list})).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
   })
  }

}
