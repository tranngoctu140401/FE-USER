import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-product-hot',
  templateUrl: './product-hot.component.html',
  styleUrls: ['./product-hot.component.css']
})
export class ProductHotComponent implements OnInit {

  constructor(private service:SharedService) { }
  dsSanphamHot:any=[];

  ngOnInit(): void {
    this.reloadDsSanphamHot();
  }

  reloadDsSanphamHot(){
    this.service.getSanphamHot().subscribe(data =>{
      this.dsSanphamHot = data;
    })
  }

}
