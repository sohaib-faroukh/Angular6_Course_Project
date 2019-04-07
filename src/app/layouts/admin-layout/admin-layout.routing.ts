import { ExamManagementComponent } from './exam-management/exam-management.component';
import { CategoryEditDetailComponent } from './category-management/category-edit-detail/category-edit-detail.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { QuestionManagementComponent } from './question-management/question-management.component';
import { EditDetailComponent } from './question-management/edit-detail/edit-detail.component';
import { CategoryManagementComponent } from './category-management/category-management.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'question', component: QuestionManagementComponent ,children:[
        { path: 'details/:Id', component:EditDetailComponent },
    ] },

    {
        path: 'categories', component: CategoryManagementComponent, children: [
            { path: 'category/:Id', component: CategoryEditDetailComponent },
        ]
    },
    {
        path: 'exam', component: ExamManagementComponent, children: [
            // { path: 'exam/:Id', component: CategoryEditDetailComponent },
        ]
    },
    // { path: 'question/:Id', component: EditDetailComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
];
