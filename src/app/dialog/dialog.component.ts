import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input() openedd: boolean = false;
  public dataSaved = false;

  formUser = new FormGroup({
    maNV: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  public close(): void {
    this.openedd = false;
  }

  public submit(): void {
    this.dataSaved = true;
    this.close();
  }
}
