import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe ('Test', 'Zobaczmy czy działa', 'http://www.zajadam.pl/wp-content/uploads/hamburger-przepis-469x313.jpg'),
    new Recipe ('Test', 'Zobaczmy czy działa', 'http://www.zajadam.pl/wp-content/uploads/hamburger-przepis-469x313.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
