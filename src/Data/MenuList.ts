type menuType= {
    displayName:string,
        type:string,
        link:string,
        icon:string
}

export const Menu:menuType[]=[
    {
        displayName:'User Management',
        type:'',
        link:'User-Management',
        icon:"users1.svg"
    },
    {
        displayName:'Audit Checklist Management',
        type:'',
        link:'Audit-Checklist-Management',
        icon:"Audit_Checklist_Management.svg"
    },
    {
        displayName:'User Role Management',
        type:'',
        link:'User-Role-Management',
        icon:"UserRoleManagement.svg"
    },
    {
        displayName:'NABH Self Assessment',
        type:'',
        link:'NABH-Self-Assessment',
        icon:"selfassessmenticon.svg"
    },
    {
        displayName:'Document Management(DMS)',
        type:'',
        link:'Document-Management',
        icon:"MyDocuments.png"
    },
    {
        displayName:'Record Management',
        type:'',
        link:'',
        icon:"MyDocuments.png"
    },
    {
        displayName:'Indent management',
        type:'',
        link:'',
        icon:"Medication-Eror-Reporting.svg"
    },
    {
        displayName:'Audit management',
        type:'parent',
        link:'',
        icon:"Clinical-Audit.svg"
    },
    {
        displayName:'KPI Management',
        type:'parent',
        link:'',
        icon:"KPI.svg"
    },
    {
        displayName:'Training Management',
        type:'parent',
        link:'',
        icon:"Training-Management.svg"
    },
    {
        displayName:'Survey Management',
        type:'parent',
        link:'',
        icon:"servey_img.svg"
    },
    {
        displayName:'Complaints Management',
        type:'parent',
        link:'',
        icon:"Complaint_Management.svg"
    },
    {
        displayName:'Committee Meeting Management',
        type:'parent',
        link:'',
        icon:"Compliance.svg"
    },
    {
        displayName:'Risk',
        type:'parent',
        link:'',
        icon:"Compliance.svg"
    }

]