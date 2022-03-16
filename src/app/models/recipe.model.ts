import { IngredientModel } from './ingredient.model';

export class RecipeModel {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  ingredients: IngredientModel[];

  constructor(
    name: string,
    desc: string,
    img: string,
    ingr: IngredientModel[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = img;
    this.ingredients = ingr;
  }
}
