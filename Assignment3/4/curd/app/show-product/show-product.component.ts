import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
data:any;

  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.ps.getProduct().subscribe(res=>{
      this.data=res;
      console.log(res);
    })
  }
  getdeleteproduct(id:any)
  {
   this.ps.deleteProduct(id).subscribe(res=>{
     this.data=res;
     console.log(res)
   })
  }

}
