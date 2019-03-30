import { AnswerVM } from "./Answers";

export class Question {
    intId:number
    intCategoryId:number
    QuestionText: string
    booleanIsHTML?:boolean
    intQuestionTypeId?:number
}


export class QuestionVM {
    intQuestionId: number;
    QuestionText: string 
    intCategoryId: number;
    CategoryName : string 
    booleanIsHTML?:boolean
    intQuestionTypeId?:number;
    Answers: AnswerVM[];
}