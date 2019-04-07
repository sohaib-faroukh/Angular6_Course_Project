import { AnswerVM } from "./Answers";

export class Question {
    Id:number
    CategoryId:number
    QuestionText: string
    IsHTML?:boolean
    QuestionTypeId:number
}


export class QuestionVM {
    QuestionId: number;
    QuestionText: string 
    CategoryId: number;
    CategoryName : string 
    IsHTML?:boolean
    QuestionTypeId:number;
    Answers: AnswerVM[];
}