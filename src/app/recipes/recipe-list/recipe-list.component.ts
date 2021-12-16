import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedInList = new EventEmitter<RecipeModel>();

  recipes: RecipeModel[] = [];
  selectedRecipe: RecipeModel = this.recipes[0];
  constructor(private recipesService: RecipesService) {
    this.recipes=recipesService.recipes;
  }

  ngOnInit(): void {}

  onRecipeSelected(recipe: RecipeModel) {
    this.recipeSelectedInList.emit(recipe);
  }
}
