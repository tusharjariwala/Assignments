import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProduct()
  {
    return this.http.get('http://localhost:8000/')
  }
  insertProduct(data:any)
  {
    return this.http.post('http://localhost:8000/admin/products/',data);
  }
  deleteProduct(id:any)
  {
    return this.http.delete('http://localhost:8000/'+id);
  }
  getProducts(id:any)
  {
   return this.http.get('http://localhost:8000/'+id);
  }
  updateProducts(id:any,data:any)
  {
    return this.http.put('http://localhost:8000/'+id,data);
  }
}
