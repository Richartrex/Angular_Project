import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*public title:string = 'Richard website';*/
  public title = 'Raclette party';

  isThisIngredientVital:boolean = true;

  MoviesList:boolean = true;

  songList:string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];

}
