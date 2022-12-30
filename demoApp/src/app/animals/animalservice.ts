import { Injectable } from "@angular/core";
import { Animal } from "./animal";

@Injectable({
    providedIn: 'root'
})
export class AnimalService{

    public getAnimals(){
        let animals:Animal[]=[{
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

        return animals;
    }

    getAnimalById(id:string){

        let animals:Animal[]=this.getAnimals();
        return animals.find(a=>a.id==id);
      }

}