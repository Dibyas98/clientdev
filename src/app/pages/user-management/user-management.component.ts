import { Component } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { FilterComponent } from '../../components/filter/filter.component';
import {
  UserManagementsearchDepartmentList,
  UserManagementSelectStatusList,
} from '../../../Data/FilterList';
import {
  UserManagementsearchDepartmentTitle,
  UserManagementSelectStatusTitle,
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

  // isActive: string | null = null;
  // toggleDropDown(dropdown: string): void {
  //   // event.stopPropagation(); // Prevent event propagation to the document
  //   // const target = event.target as HTMLElement;
  //   // if (this.isActive === false) {
  //   //   this.isActive = target?.innerText;
  //   //   console.log("if "+this.isActive);
  //   // } else if (this.isActive === target?.innerText) {
  //   //   this.isActive = false;
  //   //   console.log("else if "+this.isActive);
  //   // } else {
  //   //   this.isActive = target?.innerText;
  //   //   console.log("else "+this.isActive);
  //   // }
  //   this.isActive = this.isActive === dropdown ? null : dropdown;

  //   // Toggle dropdown visibility
  // }

  // toogleDropDownOutside(): void {
  //   // this.isActive = false;
  // }


  activeDropdown: string | null = null;

  handleToggle(dropdown: string) {
    this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown;
  }
}
