import { Component , OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Animal } from './animal';
import { AnimalService } from './animalservice';

@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit{

  animals:Animal[]=[];
  //sub!=Subscription;

  constructor(private animalService:AnimalService){}


  ngOnInit(): void {
    this.animals=this.animalService.getAnimals();
    this.filteredAnimals=this.animals;
  }

  showImage:boolean=false;
  width:number=100;
  height:number=70;
  _valName:string="";
  filteredAnimals:Animal[]=[];

  get valName():string{
    return  this._valName;
}

set valName(val:string){

 this._valName=val;
 
 this.filteredAnimals=this.checkName(val);
 
}



  


imageVisible():void{
  this.showImage=!this.showImage;
}

checkName(val:string):Animal[]{
  val=this.valName;
  return this.animals.filter((anm:Animal)=>anm.name.includes(val));



}
}
