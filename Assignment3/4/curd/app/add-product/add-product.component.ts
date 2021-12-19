import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
form!:FormGroup;
  constructor(private fb:FormBuilder,private ps:ProductService,private router:Router) { }

  createform()
  {
    this.form=this.fb.group({
      name:[''],
      price:[''],
      qunatity:['']
    })
  }
  ngOnInit(): void {
    this.createform();
  }
  insertData()
  {
     this.ps.insertProduct(this.form.value).subscribe(res=>{
     console.log(res);
     this.router.navigate(['/show-product'])
     })
  }

}
