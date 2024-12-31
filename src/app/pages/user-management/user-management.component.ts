import { Component } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { UserManagementsearchDepartmentList } from '../../../Data/FilterList';
import { UserManagementsearchDepartmentTitle } from '../../../Data/FilterTitle';
@Component({
  selector: 'app-user-management',
  imports: [HeadingComponent,FilterComponent],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  FilterList:any= UserManagementsearchDepartmentList
  FilterTitel:string = UserManagementsearchDepartmentTitle
  
  
}
