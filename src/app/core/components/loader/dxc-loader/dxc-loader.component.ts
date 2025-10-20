import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../shared/services/loader.service';
@Component({
  selector: 'app-dxc-loader',
  templateUrl: './dxc-loader.component.html',
  styleUrls: ['./dxc-loader.component.scss']
})
export class DxcLoaderComponent implements OnInit {
  loading: boolean;
  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((v) => {
      // console.log(v);
      this.loading = v;
    });
  }

  ngOnInit() {
  }

}
