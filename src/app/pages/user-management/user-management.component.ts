import { Component } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { FilterComponent } from '../../components/filter/filter.component';
import {
  UserManagementsearchDepartmentList,
  UserManagementSelectStatusList,
  UserManagementSelectUserTypeList,
} from '../../../Data/FilterList';
import {
  UserManagementsearchDepartmentTitle,
  UserManagementSelectStatusTitle,
  UserManagementSelectUserTypeTitle,
} from '../../../Data/FilterTitle';

@Component({
  selector: 'app-user-management',
  imports: [HeadingComponent, FilterComponent],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css',
})
export class UserManagementComponent {
  SearchDepartmnetFilterList: any = UserManagementsearchDepartmentList;
  SearchDepartmnetFilterTitel: string = UserManagementsearchDepartmentTitle;
  SelectStatusList: any = UserManagementSelectStatusList;
  SelectStatusTille: string = UserManagementSelectStatusTitle;
  SelectuserTitle: string = UserManagementSelectUserTypeTitle;
  SelectUserList:string[]=UserManagementSelectUserTypeList


  activeDropdown: string | null = null;

  handleToggle(dropdown: string) {
    this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown;
  }
}
