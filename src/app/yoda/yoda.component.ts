import { Component, OnInit } from '@angular/core';
import { Question } from '../common/question.model';

@Component({
  selector: 'app-yoda',
  templateUrl: './yoda.component.html',
  styleUrls: ['./yoda.component.css']
})
export class YodaComponent implements OnInit {

  public answers: Question[];
  public average: number;
  public questions: Question[] = [
    new Question("1", "Aimes", true, 3),
  ]


  constructor() {
    
   }

  ngOnInit() {
  }

}
