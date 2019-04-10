import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExamRoutingModule } from './exam-routing.module';
import { QuestionComponent } from './question/question.component';
import { ExamComponent } from './exam/exam.component';
import { QuestionexamComponent } from './questionexam/questionexam.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApplyStyleDirective } from './apply-style.directive';

@NgModule({
  declarations:
    [
      QuestionComponent,
      ExamComponent,
      QuestionexamComponent,
      ApplyStyleDirective
    ],
  imports: [
    CommonModule,
    ExamRoutingModule,
    FormsModule,
    NgbModule,
  ]
})
export class ExamModule { }
