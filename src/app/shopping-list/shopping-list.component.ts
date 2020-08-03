import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/Ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredients[] = [
    new Ingredients('Rice',10),
    new Ingredients('Tomato', 20)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
