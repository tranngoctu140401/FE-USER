import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:SharedService) { }
  dsloaisanpham:any=[];

  ngOnInit(): void {
    this.reloadDsLoaisanpham();
  }

  reloadDsLoaisanpham(){
    this.service.getallLoaisanpham().subscribe(data =>{
      this.dsloaisanpham = data;
    })
  }

}
