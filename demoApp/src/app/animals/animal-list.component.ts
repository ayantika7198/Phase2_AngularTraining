import { Component , OnInit} from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit{
  ngOnInit(): void {
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



  animals:Animal[]=[{
    id: "A001",
    name: "Lion",
    description: "King of Jungle",
    age: 10,
    imageUrl: "../../assets/images/lion.jpg"
  },{
    id: "A002",
    name: "Tiger",
    description: "Tiger it is",
    age: 6,
    imageUrl: "../../assets/images/tiger.jpg"
  },{
    id: "A003",
    name: "Horse",
    description: "Horse it is",
    age: 5,
    imageUrl: "../../assets/images/horse.jpg"
  },{
    id: "A004",
    name: "Snake",
    description: "Snake it is",
    age: 2,
    imageUrl: "../../assets/images/snake.jpg"
  },{
    id: "A005",
    name: "Monkey",
    description: "Monkey it is",
    age: 8,
    imageUrl: "../../assets/images/monkey.jpg"
  },{
    id: "A006",
    name: "Elephant",
    description: "Elephant it is",
    age: 12,
    imageUrl: "../../assets/images/elephant.jpg"
  },
]


imageVisible():void{
  this.showImage=!this.showImage;
}

checkName(val:string):Animal[]{
  val=this.valName;
  return this.animals.filter((anm:Animal)=>anm.name.includes(val));



}
}
