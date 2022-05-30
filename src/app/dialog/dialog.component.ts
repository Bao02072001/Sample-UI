import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { User } from '../model/user';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input() openedd: boolean;
  @Input() userInfo;
  public value: string;
  imageUrl;
  public dataSaved = false;
  public dataItem: { text: string; value: string };
  formUser = new FormGroup({
    maNV: new FormControl(''),
    chucVu: new FormControl(''),
    ho: new FormControl(''),
    ten: new FormControl(''),
    phongB: new FormControl(''),
    chucV: new FormControl(''),
  });
  @Output() cancel: EventEmitter<boolean> = new EventEmitter();
  // @Output() save: EventEmitter<User> = new EventEmitter();

  // public onSave(e: PointerEvent): void {
  //   e.preventDefault();
  //   this.save.emit(this.formUser.value);
  //   this.openedd = false;
  // }

  constructor(
    private EmployeeService: AppService,
    private df: ChangeDetectorRef
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.openedd.firstChange) {
      this.formUser.controls['maNV'].setValue(this.userInfo.userMa);
      this.formUser.controls['chucVu'].setValue(this.userInfo.userCV);
      this.formUser.controls['ho'].setValue(this.userInfo.userLastN);
      this.formUser.controls['ten'].setValue(this.userInfo.userFirstN);
      this.formUser.controls['phongB'].setValue(this.userInfo.userPB);
      this.value = this.userInfo.userPB;
      this.dataItem = { text: this.value, value: this.value };
      this.formUser.controls['chucV'].setValue(this.userInfo.userCD);
      this.imageUrl = this.userInfo.UserAva;
      this.df.detectChanges;
    }
  }
  ngOnInit(): void {
    this.EmployeeService.loadEmployee().subscribe((res) => {
      res.map((x) => this.dataChucvu.push(x.roomName));
    });
    this.EmployeeService.loadNameEmployee().subscribe((res) => {
      res.map((x) => this.dataChucdanh.push(x.name));
    });
    this.EmployeeService.loadTreeViewEmployee().subscribe((res) => {
      this.data = res;
      this.dataItem = this.data[0];
      console.log(res);
    });
  }

  public closeForm(): void {
    this.openedd = false;
    this.cancel.emit(this.openedd);
    this.df.detectChanges();
  }
  public data: any[] = [];

  public dataChucvu: Array<string> = [];

  public dataChucdanh: Array<string> = [];

  public EditUser(event) {
    this.userInfo.userMa = this.formUser.controls['maNV'].value;
    this.userInfo.userCV = this.formUser.controls['chucVu'].value;
    this.userInfo.userLastN = this.formUser.controls['ho'].value;
    this.userInfo.userFirstN = this.formUser.controls['ten'].value;
    this.userInfo.userPB = this.formUser.controls['phongB'].value;
    this.userInfo.userCD = this.formUser.controls['chucV'].value;
    this.userInfo.UserAva = this.imageUrl;
    this.EmployeeService.editEmployee(this.userInfo).subscribe();
    alert('Edit success');
    this.closeForm();
  }
}
