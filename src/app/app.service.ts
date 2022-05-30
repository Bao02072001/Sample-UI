import { Injectable } from '@angular/core';
import { ApiHttpService } from 'src/core/services/apihttp/apihttp.service';
import { User } from './model/user';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private apiService: ApiHttpService) {}
  //getData
  getEmployee() {
    return this.apiService.execSv<any>(
      'Sample',
      'Sample',
      'UserBusiness',
      'GetAsync'
    );
  }
  //load Phong ban
  loadEmployee() {
    return this.apiService.execSv<any>(
      'Sample',
      'Sample',
      'RoomBusiness',
      'GetAsync'
    );
  }
  //load name selected
  loadSelectedEmployee(data: string) {
    return this.apiService.execSv<any>(
      'Sample',
      'Sample',
      'TreeviewBusiness',
      'GetChildsNodeNameAsync',
      data
    );
  }

  loadDepartEmployee(data) {
    return this.apiService.execSv<any>(
      'Sample',
      'Sample',
      'UserBusiness',
      'GetByDepartmentAsync',
      data
    );
  }
  //Load chuc danh
  loadNameEmployee() {
    return this.apiService.execSv<any>(
      'Sample',
      'Sample',
      'NameBusiness',
      'GetAsync'
    );
  }
  //load tree view
  loadTreeViewEmployee() {
    return this.apiService.execSv<any>(
      'Sample',
      'Sample',
      'TreeviewBusiness',
      'GetBuildTreeAsync'
    );
  }
  //Add
  addEmployee(data: any) {
    return this.apiService.execSv<any>(
      'Sample',
      'Sample',
      'UserBusiness',
      'AddUserAsync',
      data
    );
  }
  //Load PB
  updateEmployee(data: any) {
    return this.apiService.execSv<any>(
      'Sample',
      'Sample',
      'DepartmentBusiness',
      'GetAsync',
      data
    );
  }

  //Load image
  loadImageEmployee(data: any) {
    return this.apiService.execSv<any>(
      'Sample',
      'Sample',
      'ImageBusiness',
      'GetAsync',
      data
    );
  }
  //Edit
  editEmployee(data: any) {
    return this.apiService.execSv<any>(
      'Sample',
      'Sample',
      'UserBusiness',
      'EditUserAsync',
      data
    );
  }
  //Remove
  removeEmployee(data: any) {
    return this.apiService.execSv<any>(
      'Sample',
      'Sample',
      'NewBusiness',
      'DelAsync',
      data
    );
  }
}
