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
  selector: 'app-dialog-adddd',
  templateUrl: './dialog-adddd.component.html',
  styleUrls: ['./dialog-adddd.component.scss'],
})
export class DialogAddddComponent implements OnInit {
  @Input() isNew: boolean;
  imageUrl;
  fileToUpload: File = null;
  base64: string = '';
  formUser = new FormGroup({
    maNV: new FormControl(''),
    chucVu: new FormControl(''),
    ho: new FormControl(''),
    ten: new FormControl(''),
    phongB: new FormControl(''),
    chucV: new FormControl(''),
  });
  @Output() cancelForm: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private EmployeeService: AppService,
    private df: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.EmployeeService.loadEmployee().subscribe((res) => {
      res.map((x) => this.dataChucvu.push(x.roomName));
    });
    this.EmployeeService.loadNameEmployee().subscribe((res) => {
      res.map((x) => this.dataChucdanh.push(x.name));
    });

    this.EmployeeService.loadTreeViewEmployee().subscribe((res) => {
      this.data = res;
      console.log(res);
    });
  }
  public closeForm(): void {
    this.isNew = false;
    this.cancelForm.emit(this.isNew);
    this.formUser.reset();
    this.imageUrl = '';
  }
  public data: any[] = [];

  public dataChucvu: any[] = [];

  public dataChucdanh: Array<string> = [];

  public AddUser(event) {
    var user = new User();
    user.UserMa = this.formUser.controls['maNV'].value;
    user.UserCV = this.formUser.controls['chucVu'].value;
    user.UserLastN = this.formUser.controls['ho'].value;
    user.UserFirstN = this.formUser.controls['ten'].value;
    user.UserPB = this.formUser.controls['phongB'].value;
    user.UserCD = this.formUser.controls['chucV'].value;
    user.UserAva = this.imageUrl ? this.imageUrl.toString() : '';
    this.EmployeeService.addEmployee(user).subscribe();
    this.EmployeeService.loadImageEmployee(this.imageUrl).subscribe();
    setTimeout(() => {
      alert('Add success');
    }, 100);
    this.closeForm();
  }

  handleFileInput(e) {
    this.fileToUpload = e.target.files[0];
    //Show image preview
    var reader = new FileReader();
    reader.onloadend = () => {
      this.imageUrl = reader.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
}
