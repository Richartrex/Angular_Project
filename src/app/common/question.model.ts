export class QuestionModel {
    public id:string;
    public title:string;
    public answer:boolean;
    public score:number;

    constructor(id: string, title:string, answer: boolean, score: number) {
        this.id = id;
        this.title = title;
        this.answer = answer;
        this.score = score;
    }
}