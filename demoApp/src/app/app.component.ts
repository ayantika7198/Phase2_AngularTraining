import { Component } from "@angular/core";
import { IProduct } from "./products/product";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  pageTitle:string="Ayantika Datta";

  addCart:IProduct[]=[];

  onProductClicked(pro: IProduct): void{
    this.addCart.push(pro);
  }
}