import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel(
      'Spaghetti alla chitarra',
      'Un particolare tipo di pasta che...',
      'https://images.lacucinaitaliana.it/wp-content/uploads/2020/06/03204258/Pasta-alla-chitarra-con-ragu-di-polo.jpg'
    ),
    new RecipeModel(
      'Lasagne alla bolognese',
      'Pasta emiliano molto calorica sempre presente nei menù',
      'https://images.lacucinaitaliana.it/gallery/119939/Big/be774eb0-09eb-4e1e-940d-72e38cea3ac3.jpg'
    ),
    new RecipeModel(
      'Gnocchi ai formaggi',
      'Gnocchi al formaggio',
      'https://images.fidhouse.com/fidelitynews/wp-content/uploads/sites/6/2017/05/1495792337_13c855513b63705bb079c377ed01563d4eb12ccc-223759579.jpg?w=580'
    ),
    new RecipeModel(
      'Tiramisù',
      'Dolce bono',
      'https://ricetta.it/Uploads/Imgs/tiramisu-classico.jpg'
    ),
  ];

  selectedRecipe:RecipeModel=this.recipes[0];
  constructor() {}

  ngOnInit(): void {}
}
