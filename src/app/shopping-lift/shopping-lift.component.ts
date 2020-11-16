import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-lift',
  templateUrl: './shopping-lift.component.html',
  styleUrls: ['./shopping-lift.component.css']
})
export class ShoppingLiftComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 10),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
