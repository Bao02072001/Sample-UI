import { Injectable } from '@angular/core';
import { ApiHttpService } from 'src/core/services/apihttp/apihttp.service';
import { User } from './model/user';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private apiService: ApiHttpService) {}
  getEmployee() {
    return this.apiService.execSv<any>(
      'Sample',
      'Sample',
      'UserBusiness',
      'GetAsync'
    );
  }

  addEmployee(data: any) {
    return this.apiService.execSv<any>(
      'Sample',
      'Sample',
      'UserBusiness',
      'AddUserAsync',
      data
    );
  }

  updateEmployee(data:any) {
    return this.apiService.execSv<any>(
      'Sample',
      'Sample',
      'DepartmentBusiness',
      'GetAsync',
      data
    );
  }

  removeEmployee(id: string) {
    return this.apiService.execSv<any>(
      'Sample',
      'Sample',
      'EmployeeBusiness',
      'RemoveEmployeeAsync',
      [id]
    );
  }
}
