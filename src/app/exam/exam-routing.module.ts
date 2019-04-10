import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { QuestionComponent } from './question/question.component';
import { QuestionexamComponent } from './questionexam/questionexam.component';

const routes: Routes = [
  {path:'',component:ExamComponent},
  {path:'question',component:QuestionComponent},
  
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
