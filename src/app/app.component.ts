import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/core/services/apihttp/apihttp.service';
import { process, State } from '@progress/kendo-data-query';
import { sampleUser } from './user';
import {
  GridDataResult,
  DataStateChangeEvent,
  SelectableSettings,
} from '@progress/kendo-angular-grid';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from './app.service';
import { User } from './model/user';
import { of, sample } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Sample-UI';
  opened = false;
  selectedKeys: any[] = [];
  users: any[];
  public hasChildren = (item: any) => item.items && item.items.length > 0;
  public fetchChildren = (item: any) => of(item.items);
  state: State = {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    filter: {
      logic: 'or',
      filters: [{ field: 'userMa', operator: 'contains', value: '' }],
    },
  };
  gridData: GridDataResult;

  constructor(private EmployeeService: AppService) {}

  ngOnInit(): void {
    this.EmployeeService.getEmployee().subscribe((res) => {
      this.users=res;
      this.gridData = process(this.users, this.state);
    });

  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.users, this.state);
  }

  // public expandedKeys: any[] = ['0', '1'];

  // public checkedKeys: any[] = ['0_1'];
  // public selection: SelectableSettings = { mode: "multiple" };

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
  ];


  public expandedKeys: any[] = ["0", "1"];

  public selection: SelectableSettings = { mode: "multiple" };

  items = new FormGroup({
    locDL: new FormControl(''),
    xuatDL: new FormControl(''),
    lamM: new FormControl(''),
    them: new FormControl(''),
  });

  openDialog() {
    this.opened = !this.opened;
  }
  close(value) {
    this.opened = value;
  }

  show() {
   this.EmployeeService.updateEmployee(this.selectedKeys).subscribe(res => {
     this.users = res;
     this.gridData = process(this.users, this.state)
   });
  }
  removeUser(){
    console.log('Remove');
  }
}
