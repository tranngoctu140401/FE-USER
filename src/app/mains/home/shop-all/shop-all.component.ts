import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-shop-all',
  templateUrl: './shop-all.component.html',
  styleUrls: ['./shop-all.component.css']
})
export class ShopAllComponent implements OnInit {

  constructor(private service:SharedService) { }
  dsSanpham:any;

  ngOnInit(): void {
    this.reloadDsSanpham();
  }

  reloadDsSanpham(){
    this.service.getallSanpham().subscribe(data =>{
      this.dsSanpham = data;
      console.log(this.dsSanpham);

    })
    
  }

}
