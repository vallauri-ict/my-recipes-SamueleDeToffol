import { Injectable } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredients: IngredientModel[] = [];
  constructor(public dataStorageService: DataStorageService) {}

  getIngredients() {
    this.dataStorageService.sendGetRequest('shopping-list').subscribe(
      (data) => {
        this.ingredients = data as IngredientModel[];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  addIngredient(ingredient: IngredientModel) {
    let data =
      this.ingredients.find(
        (aus) => aus.name.toUpperCase() === ingredient.name.toUpperCase()
      ) ?? null;
    if (!data) this.ingredients.push(ingredient);
    else {
      this.ingredients.map((aus) =>
        aus.name.toUpperCase() === ingredient.name.toUpperCase()
          ? (aus.amount += ingredient.amount)
          : null
      );
    }
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
  }
}
