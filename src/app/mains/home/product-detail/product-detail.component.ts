import { AfterViewInit, Component, OnInit, Renderer2,Injector } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent extends BaseComponent implements OnInit {

  public item:any;
  constructor(private renderer: Renderer2 ,private share: SharedService, injector: Injector) {
    super(injector);
  }

  sp: any;

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/sanpham/'+id).subscribe(res => {
      this.sp = res;
      console.log(this.sp);
    });
  
    });
  }
  ngAfterViewInit() {
    this.loadScripts(
      '../../../../assets/js/jquery.elevateZoom.min.js',
      '../../../../assets/js/bootstrap-input-spinner.js',
      '../../../../assets/js/jquery.min.js',
      '../../../../assets/js/bootstrap.bundle.min.js',
      '../../../../assets/js/jquery.hoverIntent.min.js',
      '../../../../assets/js/jquery.waypoints.min.js',
      '../../../../assets/js/superfish.min.js',
      '../../../../assets/js/owl.carousel.min.js',
      '../../../../assets/js/main.js',
      '../../../../assets/js/demos/demo-2.js',
      );
   }

}