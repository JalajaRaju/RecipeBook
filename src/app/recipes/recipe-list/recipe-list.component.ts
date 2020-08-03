import { Component, OnInit } from '@angular/core';
import {Recipe} from '../Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[]=[
    new Recipe('Briyani', 'Briyani Desc','https://upload.wikimedia.org/wikipedia/commons/b/b6/The_art_of_%22BIRYANI%22.jpg'),
    new Recipe('Dosa','Dosa Description','https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_and_ghee.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
