import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
 
  public developer = new Developer("Richard", "Leblanc", 42, "Homme", "Il est loin le temps des sardines", [
    new Skill ("HTML", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png", "https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3"),
    new Skill ("CSS", "https://i0.wp.com/www.abouthack.com/wp-content/uploads/2014/07/css3_logo.png?fit=512%2C512&ssl=1", "https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3/1605060-mettez-en-place-le-css"),
  ]);   
    
  

  
  constructor() { }  
        
  ngOnInit() {
  }
  
  
}
