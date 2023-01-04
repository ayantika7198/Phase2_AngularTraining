import { Injectable } from "@angular/core";
import { IProduct } from "src/app/products/product";

@Injectable({
    providedIn: 'root'
})

export class LoggingService{

    

    log():string{

        return "Welcome to the LoggingService Log";
    }

    print(products:IProduct[]):void{
        console.log(products);

    }
}