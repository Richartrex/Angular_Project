import { Component, OnInit } from '@angular/core';
import { QuestionModel } from '../common/question.model';

@Component({
  selector: 'app-yoda',
  templateUrl: './yoda.component.html',
  styleUrls: ['./yoda.component.css']
})
export class YodaComponent implements OnInit {

  // public answers: QuestionModel[];
  public average: number;
  
  public questions = [
    new QuestionModel("1", "Aimes-tu les logiciels libres ?", true, 3),
    new QuestionModel("2", "La Force a-t-elle créé Linux ?", true, 1),
    new QuestionModel("3", "Est-ce que le code c'est la vie ?", true, 2),
    new QuestionModel("4", "Préfères-tu les GUI au CLI ?", false, 3),
    new QuestionModel("5", "L'histoire de la force a t-elle été écrite par Git ?", true, 2),
    new QuestionModel("6", "La documentation est-elle le meilleur de la force ?", true, 2),
    new QuestionModel("7", "Penses-tu que tester c'est douter ?", false, 1),
    new QuestionModel("8", "Javascript est-il le Java du web ?", false, 1),
    new QuestionModel("9", "L'open source se situe dans les Alpes ?", false, 4),
    new QuestionModel("10", "Angular est-il une pierre magique ?", false, 1)
  ];

  

  constructor() {
    
   }

  ngOnInit() {
  }

}
