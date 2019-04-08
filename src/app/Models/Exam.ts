import { Category } from './Category';

export class Exam{
    Id:number;
    Name:string;
    ExamDate:Date=new Date();
    Description:string;
    UserId:number;
    FirstName: string;
    LastName : string;
    Categories : Category[];
    
}