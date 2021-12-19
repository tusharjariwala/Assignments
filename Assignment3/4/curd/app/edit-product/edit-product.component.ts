import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  data:any;
  id:any;
  product !: Product;
  constructor(private ps:ProductService,private router:Router,private fb:FormBuilder,private route:ActivatedRoute) { }
  
  form=new FormGroup({
    name:new FormControl(""),
    price:new FormControl(""),
    qunatity:new FormControl("")
  })
  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    console.log(this.id);
    this.getProductdata(this.id);
}

getProductdata(id:any)
{
  this.ps.getProducts(id).subscribe(res => {
    this.data = res;
    this.product = this.data;
    this.form = new FormGroup({
      name: new FormControl(this.product.name),
      price: new FormControl(this.product.price),
      qunatity: new FormControl(this.product.qunatity),
    })
  })
}

editData(){
  this.ps.updateProducts(this.id,this.form.value).subscribe(res => {
    console.log(res);
    this.router.navigateByUrl("/show-product");
  })
}


}
