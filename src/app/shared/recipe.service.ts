import { Injectable } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { RecipeModel } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: RecipeModel[] = [];
  selectedRecipe: RecipeModel = this.recipes[0];

  constructor(private dataStorageService: DataStorageService) {}

  getRecipes() {
    this.dataStorageService.sendGetRequest('recipes').subscribe(
      (data) => {
        console.log(data);
        this.recipes = data as RecipeModel[];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
