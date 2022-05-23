import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { User } from '../model/user';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input() openedd: boolean;
  @Output() closeWin = new EventEmitter();
  public dataSaved = false;

  formUser = new FormGroup({
    maNV: new FormControl(''),
    chucVu: new FormControl(''),
    ho: new FormControl(''),
    ten: new FormControl(''),
    phongB: new FormControl(''),
    chucV: new FormControl(''),
  });

  constructor(private EmployeeService: AppService) {}

  ngOnInit(): void {
  }

  public close(): void {
    this.openedd = false;
    this.closeWin.emit(this.openedd);
  }

  public submit(): void {
    this.dataSaved = true;
    this.close();
  }
  public dataChucvu: Array<string> = [
    'Quản lí cấp cao',
    'Quản lí',
    'Nhân viên',
  ];
  public dataChucdanh: Array<string> = ['Giám đốc điều hành'];

  public onSubmit() {
    console.log('onSubmit');
  }

  public AddUser(event) {
    var user = new User();
    user.UserMa = this.formUser.controls['maNV'].value;
    user.UserCV = this.formUser.controls['chucVu'].value;
    user.UserLastN = this.formUser.controls['ho'].value;
    user.UserFirstN = this.formUser.controls['ten'].value;
    user.UserPB = this.formUser.controls['phongB'].value;
    user.UserCD = this.formUser.controls['chucV'].value;
    this.EmployeeService.addEmployee(user).subscribe();
  }
}
