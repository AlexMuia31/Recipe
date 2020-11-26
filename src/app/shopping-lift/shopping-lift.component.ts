import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-lift',
  templateUrl: './shopping-lift.component.html',
  styleUrls: ['./shopping-lift.component.css']
})
export class ShoppingLiftComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) =>{
        this.ingredients = ingredients;
      }
    );
  }
  

}
