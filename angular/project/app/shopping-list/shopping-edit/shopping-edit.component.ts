
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit ,OnDestroy{
  @ViewChild('f') slForm:NgForm | undefined;
  subscription:Subscription
  //@Output() ingredientAdded=new EventEmitter<Ingredient>();
  | undefined
  editMode=false;
  editItemIndex!: number;
  editItem:Ingredient | undefined;
//@Output() ingredientAdded=new EventEmitter<Ingredient>();

   constructor(private slService:ShoppingListService) 
   {
 

    }

  ngOnInit(): void {
   this.subscription= this.slService.startedEditing.subscribe(
     (index:number)=>{
       this.editItemIndex=index;
            this.editMode=true;
            this.editItem=this.slService.getIngredient(index);
            this.slForm?.setValue({
              name:this.editItem.name,
              amount:this.editItem.amount
            })
     }
   );
  }
  onSubmit(form:NgForm)
  {
    const value=form.value;
    const newIngredient=new Ingredient(value.name,value.amount);
    //this.ingredientAdded.emit(newIngredient);
    if(this.editMode)
    {
         this.slService.updateIngredients(this.editItemIndex,newIngredient);
    }
    else{
      this.slService.addIngredient(newIngredient);
    }
    this.editMode=false;
  form.reset();
  
  }
  onClear()
  {
    this.slForm?.reset();
    this.editMode=false;
  }
  onDelete()
  {
    this.slService.deleteIngredients(this.editItemIndex);
    this.onClear();
  }
  ngOnDestroy()
  {
    this.subscription?.unsubscribe();
  }
  
}
