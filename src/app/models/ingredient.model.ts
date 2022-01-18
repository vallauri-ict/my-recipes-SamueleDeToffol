export class IngredientModel {
  id: number;
  _id: number;
  name: string;
  amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
}
