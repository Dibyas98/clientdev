import { Routes } from '@angular/router';
import { AuditChecklistComponent } from './pages/audit-checklist/audit-checklist.component';
import { UserRoleManagementComponent } from './pages/user-role-management/user-role-management.component';
import { NABHSelfAssessmentComponent } from './pages/nabhself-assessment/nabhself-assessment.component';
import { DocumentManagementComponent } from './pages/document-management/document-management.component';
import { AuditcomponentComponent } from './auditcomponent/auditcomponent.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';

export const routes: Routes = [
    { 
        path: '', 
        component:UserManagementComponent
    },
    { 
        path: 'User-Management', 
        component:UserManagementComponent
    },
    {
        path: 'Audit-Checklist-Management',
        component: AuditChecklistComponent
    },
    {
        path: 'User-Role-Management',
        component: UserRoleManagementComponent
    },
    {
        path: 'NABH-Self-Assessment',
        component: NABHSelfAssessmentComponent
    },
    {
        path: 'Document-Management',
        component: DocumentManagementComponent
    }
];
