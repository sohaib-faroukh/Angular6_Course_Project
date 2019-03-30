import { AnswerManagementComponent } from './answer-management/answer-management.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { QuestionManagementComponent } from './question-management/question-management.component';
import { EditDetailComponent } from './question-management/edit-detail/edit-detail.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'question', component: QuestionManagementComponent ,children:[
        { path: 'details/:Id', component:EditDetailComponent },
    ] },
    // { path: 'question/:Id', component: EditDetailComponent },
    { path: 'answer', component: AnswerManagementComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
];
