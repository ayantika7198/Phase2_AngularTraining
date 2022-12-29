import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from "rxjs";
import { Category, IProduct } from "src/app/products/product";

@Injectable({
    providedIn: 'root'
})

export class productService{

   url='api/products/';
   products:IProduct[]=[];

   private selectedProductSource= new BehaviorSubject<IProduct | null >(null);


selectedProductChanges$=this.selectedProductSource.asObservable();

  constructor(private http:HttpClient){}

    getProducts():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.url).pipe(

            tap(data=>{console.log(data);
            
              this.products=data;
        }),
            catchError(this.errorHandler)
        );
    }

    changeSelectedProduct(selectedProduct:IProduct | null):IProduct|null{

        this.selectedProductSource.next(selectedProduct);
        return selectedProduct;
      
      }

      errorHandler=(err:any)=>{

        let errorMessage:string;
        //a client side error or network error then ErrorEvent object will be thrown
     
        if(err.error instanceof ErrorEvent)
          {
     
            errorMessage = `An error has occured ${err.error.message}`
          }
          else{
     
           errorMessage =  `Backend error code ${err.status} ${err.body.error}`;
     
          }
          console.log(err);
          return throwError(errorMessage);
     
     
       }



       newProduct():IProduct{
        //logic should focus on sending back a IProduct
          return {
      
               id:'',
              name:'',
              category:Category.shirt,
              price:0,
              imageUrl:'',
              rating:0,
              quantity:0
      
          };
      
        }

        createProduct(product:IProduct):Observable<IProduct>{
            //headers variable to set request headers
           const headers= new HttpHeaders({'Content-Type':'application/json'});
       
               //newProduct spread across product
             const newProduct={...product,id:null};
       
       
             //return logic starts here
             //http .post method
             //generics method -- IProduct
             //args --3 url , newProduct ,headers
             //this.url -- declared in the class outside the functions
             return     this.http.post<IProduct>(this.url,newProduct,{headers})
             .pipe(
               tap(data=>{
       
                console.log('in create new product'+ JSON.stringify(data));
                //pushing the new data new Product to the products array
                this.products.push(data);
       
               },
               catchError(this.errorHandler)
               )
             )
         }

         deleteProduct(id:string):Observable<{}>{
            const headers= new HttpHeaders({'Content-Type':'application/json'});
        
            //@DeleteMapping deleteAll delete url/id  /api/products/111
            const url= `${this.url}/${id}`;
        
            return this.http.delete<IProduct>(url,{headers})
            .pipe(
              tap(data=>{
                console.log('deleted prd'+id);
               const foundIndex = this.products.findIndex(item=>item.id===id);
               //if product id is not found means index returned will be -1
               if(foundIndex > -1)
               this.products.splice(foundIndex,1);
        
        
              },
              catchError(this.errorHandler))
        
        
            );
         }

         updateProduct(product:IProduct):Observable<IProduct>{
            const headers= new HttpHeaders({'Content-Type':'application/json'});
        
            //put http method
            const url= `${this.url}/${product.id}`;
        
            //logic to call http put method to update the product on the given url
            return this.http.put<IProduct>(url,product, {headers}).pipe(
        
            tap(()=>{console.log('update product'+product.id);
            const foundIndex =this.products.findIndex(item=>item.id === product.id);
            if(foundIndex > -1){
              this.products[foundIndex]=product;
                }
            }),
            map(()=>product),
            catchError(this.errorHandler)
            );
        }

        
}