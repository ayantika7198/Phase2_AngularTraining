import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from 'shared/logging.service';
import { productService } from 'shared/productService';
import { Category, IProduct } from './product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy{

  name:string='';

  sub!:Subscription;

  products:IProduct[]=[];
  filteredProducts:IProduct[]=[];

  constructor(private productService:productService,
    private loggingService:LoggingService){}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  
  ngOnInit(): void {

    this.sub=this.productService.getProducts().subscribe(
      (response)=>{
        for(let res of response){
          let cat=res.category.indexOf(".");
          let str=res.category.substring(cat+1);
          let value!:Category;
          //console.log(str);
          //res.category=response.enumValue.toString();
          //console.log(res.category);
         // console.log(Category.shirt);
         // console.log(Category[res.category]);

         switch(str){
           case 'jeans':
             value=Category.jeans;
             break;
            case 'grocery':
              value=Category.grocery;
              break;
            case 'shirt':
              value=Category.shirt;
              break;
            case 'top':
              value=Category.top;
              break;
            case 'food':
              value=Category.food;
              break;
         }


          res.category=value;
        }
        this.products=response;
        this.filteredProducts=this.products;
        
      },
      (err)=>{
        console.log(err);
      }
    )
    //this.filteredProducts=this.products;
  }

  //filteredProducts:IProduct[]=[];

  showProducts():void{
    this.loggingService.print(this.filteredProducts);
  }
selectedP!:IProduct|null;
  print(product:IProduct):void{
    this.selectedP=this.productService.changeSelectedProduct(product);
    console.log(this.selectedP);
  }
newP!:IProduct;
  newProduct():void{
  
    this.newP=this.productService.newProduct();

    console.log(this.newP);
  }

  



  _filCats:string="";
  title:string="";

  get filCats():string{
    return  this._filCats;
}

set filCats(val:string){

 this._filCats=val;

 this.filteredProducts=this.filterData(val);
 
}

  

  //products:IProduct[]=this.productService.getProducts();

  

  pr:IProduct=this.products[0];




  filterData(val:string):IProduct[]{
    val=this.filCats;
    return this.products.filter((prot:IProduct)=>prot.category.includes(val));
  
  
  
  }

  onRatingClicked(msg:string):void{
    this.title='Called: ' +msg;
  }

  map=new Map();
  @Output() productClicked:EventEmitter<IProduct> =new EventEmitter<IProduct>();

  //pros:any='';

  onClick(prot:IProduct):void{
    //this.pros.push()

    this.productClicked.emit(prot);
  }
}
