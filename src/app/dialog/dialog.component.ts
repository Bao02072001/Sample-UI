import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input() openedd: boolean ;
  @Output() closeWin = new EventEmitter();
  public dataSaved = false;

  formUser = new FormGroup({
    maNV: new FormControl(''),
    chucVu: new FormControl(''),
    ho: new FormControl(''),
    ten: new FormControl(''),
    phongB: new FormControl(''),
    chucD: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  public close(): void {
    this.openedd = false;
    this.closeWin.emit(this.openedd)
  }

  public submit(): void {
    this.dataSaved = true;
    this.close();
  }
  public dataChucvu:Array<string> = [
    "Quản lí cấp cao",
    "Quản lí",
    "Nhân viên"
  ]
  public dataChucdanh: Array<string> = [
    "Giám đốc điều hành"
  ]

  public onSubmit(){
    console.log('onSubmit');
  }
}
