import { CategoryManagementComponent } from './category-management/category-management.component';
import { CategoryEditDetailComponent } from './category-management/category-edit-detail/category-edit-detail.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionManagementComponent } from './question-management/question-management.component';
import { EditDetailComponent } from './question-management/edit-detail/edit-detail.component';
import { AddQuestionComponent } from './question-management/add-question/add-question.component';
import { AddCategoryComponent } from './category-management/add-category/add-category.component';
import { ExamManagementComponent } from './exam-management/exam-management.component';
import { AddExamComponent } from './exam-management/add-exam/add-exam.component';
import { CheckedPipePipe } from 'src/app/checked-pipe.pipe';
import { FoucsedRowDirective } from 'src/app/foucsed-row.directive';
import { EditExamComponent } from './exam-management/edit-exam/edit-exam.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    FormsModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    QuestionManagementComponent,
    EditDetailComponent,
    CategoryManagementComponent,
    CategoryEditDetailComponent,
    AddQuestionComponent,
    AddCategoryComponent,
    ExamManagementComponent,
    AddExamComponent,
    EditExamComponent,
    FoucsedRowDirective,
    CheckedPipePipe,
    EditExamComponent,
    // DatePipe,
  ],

  providers:[CheckedPipePipe,
    DatePipe
  ]

})

export class AdminLayoutModule {}
