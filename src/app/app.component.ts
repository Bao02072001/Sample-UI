import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/core/services/apihttp/apihttp.service';
import { process, State } from '@progress/kendo-data-query';
import { sampleUser } from './user';
import {
  GridDataResult,
  DataStateChangeEvent,
  SelectableSettings,
  RemoveEvent,
  EditEvent,
  AddEvent,
} from '@progress/kendo-angular-grid';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { User } from './model/user';
import { Observable, of, sample } from 'rxjs';
import { dataIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Sample-UI';
  opened = false;
  isNew = false;
  selectedKeys: any[] = [];
  user = {};
  users: any[];
  private editedRowIndex: number;
  public fetchChildren(node: any): Observable<any[]> {
    // console.log(this.selectedKeys);
    // returns the items collection of the parent node as children
    return of(node.items);
  }

  public hasChildren(node: any): boolean {
    // checks if the parent node has children
    return node.items && node.items.length > 0;
  }
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

  constructor(
    private EmployeeService: AppService,
    private df: ChangeDetectorRef
  ) {}
  //Load data
  public getData() {
    this.EmployeeService.getEmployee().subscribe((res) => {
      this.users = res;
      this.gridData = process(this.users, this.state);
    });
  }

  ngOnInit(): void {
    this.getData();

    this.EmployeeService.loadTreeViewEmployee().subscribe((res) => {
      this.data = res;
    });
    // this.EmployeeService.loadSelectedEmployee(this.selectedKeys).subscribe(
    //   (res) => {
    //     this.users = res;
    //     this.gridData = process(this.users, this.state);
    //     console.log(res);
    //   }
    // );
  }
  //Load khi thay data thay doi
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.users, this.state);
  }
  //Data
  public data: any[] = [];

  public expandedKeys: any[] = ['0', '1'];

  public selection: SelectableSettings = { mode: 'multiple' };
  //form group
  items = new FormGroup({
    locDL: new FormControl(''),
    xuatDL: new FormControl(''),
    lamM: new FormControl(''),
    them: new FormControl(''),
  });
  //open add
  openDialog() {
    this.isNew = !this.isNew;
  }
  close(value) {
    this.opened = value;
  }
  //chon tren treeview
  childs;
  show() {
    this.EmployeeService.updateEmployee(this.selectedKeys).subscribe((res) => {
      this.users = res;
      this.gridData = process(this.users, this.state);
    });
    this.EmployeeService.loadSelectedEmployee(
      this.selectedKeys.join(' ')
    ).subscribe((res) => {
      console.log(res);

      this.childs = res.result;
      this.EmployeeService.loadDepartEmployee(this.childs.join(',')).subscribe(
        (result) => {
          this.users = result;
          this.gridData = process(this.users, this.state);
        }
      );
    });
  }
  //reloads
  reloadPage(): void {
    this.gridData = process(this.users, this.state);
  }
  //xoa
  public removeHandler({ sender, dataItem }: RemoveEvent): void {
    let data = dataItem.userID;
    this.EmployeeService.removeEmployee(data).subscribe((res) => {
      this.getData();
      this.df.detectChanges();
    });
    sender.cancelCell();
  }

  //Sua
  public editHandler(editForm, data): void {
    this.user = data.dataItem;
    this.opened = !this.opened;
    // this.user = data.dataItem;
    // this.opened = false;
  }

  public saveHandler(user: User): void {}
  //Cancel
  public cancelHandler(event): void {
    this.opened = event;
    this.isNew = event;
    this.df.detectChanges();
    this.getData();
  }
}
