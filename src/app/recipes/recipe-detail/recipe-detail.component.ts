import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';
import { RecipeService } from 'src/app/shared/recipe.service';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(
    public recipeService:RecipeService, 
    private shoppingList:ShoppingListService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private service: NgxBootstrapConfirmService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
          //console.log(params);
          let recipeId = params['id'];
          this.recipeService.getRecipe(recipeId);
      }
    )
  }

  sendToShoppingList()
  {
    this.shoppingList.addIngredients(this.recipeService.selectedRecipe.ingredients);
  }

  onEditRecipe()
  {
    this.router.navigate(['edit'],{relativeTo:this.activatedRoute});
  }

  onDeleteRecipe()
  {
    let options ={
      title: 'Sure you want to delete this recipe?',
      confirmLabel: 'Okay',
      declineLabel: 'Cancel'
    }
    this.service.confirm(options).then((res: boolean) => {
      if (res) {
        this.recipeService.deleteRecipe(this.recipeService.selectedRecipe.id);
      }
    });
  }

}