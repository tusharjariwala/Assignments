import { Component, OnInit ,ElementRef} from '@angular/core';

import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private elRef:ElementRef,private recipeService:RecipeService) 
  { 

  }

  ngOnInit(): void {
 
  }

}
