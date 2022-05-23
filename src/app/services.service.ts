import { Injectable } from '@angular/core';
import { ApiHttpService } from 'src/core/services/apihttp/apihttp.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private api : ApiHttpService
  ) {}
  testApi() {
    this.api
      .execSv<any>('Sample', 'Sample', 'SampleBusiness', 'GetAsync', '0001')
      .subscribe((res) => {
        console.log(res);
      });
  }
}
