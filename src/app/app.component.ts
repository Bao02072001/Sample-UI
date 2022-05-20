import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/core/services/apihttp/apihttp.service';
import { process, State } from '@progress/kendo-data-query';
import { sampleUser } from './user';
import {
  GridDataResult,
  DataStateChangeEvent,
} from '@progress/kendo-angular-grid';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Sample-UI';
  opened = false;
  constructor(private api: ApiHttpService) {}

  ngOnInit(): void {
    this.testApi();
  }

  testApi() {
    this.api
      .execSv<any>('Sample', 'Sample', 'SampleBusiness', 'GetAsync', '0001')
      .subscribe((res) => {
        console.log(res);
      });
  }
  public state: State = {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    filter: {
      logic: 'or',
      filters: [{ field: 'userMaNV', operator: 'contains', value: '' }],
    },
  };

  public gridData: GridDataResult = process(sampleUser, this.state);

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(sampleUser, this.state);
  }

  public expandedKeys: any[] = ['0', '1'];

  public checkedKeys: any[] = ['0_1'];

  public data: any[] = [
    {
      text: 'Tổng công ty nhân sự Việt Nam ',
      items: [
        { text: 'Ban giám đốc' },
        { text: 'Ban tổng giám đốc' },
        {
          text: 'Khối nhân sự',
          items: [
            { text: 'Bộ phận tính lương' },
            { text: 'Bộ phận chấm công' },
            { text: 'Bộ phận phát triển con người' },
          ],
        },
      ],
    },
    ,
  ];

  items = new FormGroup({
    locDL: new FormControl(''),
    xuatDL: new FormControl(''),
    lamM: new FormControl(''),
    them: new FormControl(''),
  });

  openDialog() {
    this.opened = !this.opened;
  }
  close(value){
    this.opened=value;
  }
}
