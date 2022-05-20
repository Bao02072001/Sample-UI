import { Injectable } from '@angular/core';
import { ApiHttpService } from 'src/core/services/apihttp/apihttp.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private apiService: ApiHttpService) {}

  addEmployee(data: any) {
    this.apiService.execSv<any>(
      'Sample',
      'Sample',
      'EmployeeBusiness',
      'AddEmployeeAsync',
      [data]
    );
  }

  updateEmployee(id: string) {
    this.apiService.execSv<any>(
      'Sample',
      'Sample',
      'EmployeeBusiness',
      'UpdateEmployeeAsync',
      [id]
    );
  }

  removeEmployee(id: string) {
    this.apiService.execSv<any>(
      'Sample',
      'Sample',
      'EmployeeBusiness',
      'RemoveEmployeeAsync',
      [id]
    );
  }
}
