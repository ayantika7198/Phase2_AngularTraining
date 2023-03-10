import { Injectable } from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Animal } from "src/app/animals/animal";
import { IEvent } from "src/app/events/event";
import { IFlower } from "src/app/flowers/flower";
import { Category, IProduct } from "src/app/products/product";
import { Todo } from "../todo/todo";
import { IPlace } from "../tourism/place";

@Injectable({
    providedIn: 'root'
})

export class InMemoryEventDbService implements InMemoryDbService{
    createDb(){
        const events: IEvent[]=[{
            "id":"E001",
            "name":"Dance Event",
            "date":"01/01/2023",
            "time":"6:00p.m.-9:00p.m.",
            "price":2000,
            "imageUrl":"../../assets/images/dance.png",
            "location":{
                "address":"Lake Park",
                "city":"Kalyani",
                "country":"India"
            },
            "sessions":[{
                "id":"SD001",
                "name":"Dance Session 1",
                "presenter":"Ayantika Datta",
                "duration":"1 hr",
                "level":"Medium",
                "voters":["Rita","John","Urshita"]
            },{
                "id":"SD002",
                "name":"Dance Session 2",
                "presenter":"Debopam Ghosh",
                "duration":"2 hr",
                "level":"Difficult",
                "voters":["Suresh","John","Monika"]
            }]
        },{
            "id":"E002",
            "name":"Singing Event",
            "date":"02/01/2023",
            "time":"6:00p.m.-8:00p.m.",
            "price":4000,
            "imageUrl":"../../assets/images/sing.jpg",
            "location":{
                "address":"Rabindra Sadan",
                "city":"Kolkata",
                "country":"India"
            },
            "sessions":[{
                "id":"SS001",
                "name":"Singing Session 1",
                "presenter":"Snehasree Majumder",
                "duration":"3 hr",
                "level":"Begineer",
                "voters":["Riya","Sanhit","Aryan"]
            },{
                "id":"SS002",
                "name":"Singing Session 2",
                "presenter":"Diya Ghosh",
                "duration":"1:30 hr",
                "level":"Difficult",
                "voters":["Sneha","Tarak","Ashish"]
            },{
                "id":"SS003",
                "name":"Singing Session 3",
                "presenter":"Rahul Das",
                "duration":"2 hr",
                "level":"Medium",
                "voters":["Priya","Tarak","Mannat"]
            }]
        },{
            "id":"E003",
            "name":"Art Event",
            "date":"03/01/2023",
            "time":"6:00p.m.-9:00p.m.",
            "price":3000,
            "imageUrl":"../../assets/images/art.jpg",
            "location":{
                "address":"Subhas Sadan",
                "city":"Pune",
                "country":"India"
            },
            "sessions":[{
                "id":"SA001",
                "name":"Art Session 1",
                "presenter":"Ayantika Datta",
                "duration":"2 hr",
                "level":"Medium",
                "voters":["Rina","Arun","Dilip"]
            },{
                "id":"SA002",
                "name":"Art Session 2",
                "presenter":"Mohan Ghosh",
                "duration":"1 hr",
                "level":"Difficult",
                "voters":["Animesh","Tinku","Seeta"]
            }]
        }];

        const animals:Animal[]=[{
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
        ];

        const products:IProduct[]=[{
            "id": 100,
            "name": "Product1",
            "price": 2000,
            "image": "../../assets/images/jeans.jpg",
            "category": Category.jeans,
            "qty": 0,
            "rating": 4
        
          },{
            "id": 101,
            "name": "Product2",
            "price": 1000,
            "image": "../../assets/images/grocery.jpg",
            "category": Category.grocery,
            "qty": 0,
            "rating": 3.5
        
          },{
            "id": 102,
            "name": "Product3",
            "price": 3000,
            "image": "../../assets/images/shirt.jpg",
            "category": Category.shirt,
            "qty": 0,
            "rating": 5
        
          },{
            "id": 103,
            "name": "Product4",
            "price": 1500,
            "image": "../../assets/images/top.jpg",
            "category": Category.top,
            "qty": 0,
            "rating": 3
        
          },{
            "id": 104,
            "name": "Product5",
            "price": 1000,
            "image": "../../assets/images/food.jpg",
            "category": Category.food,
            "qty": 0,
            "rating": 3.5
        
          },{
            "id": 105,
            "name": "Product6",
            "price": 2000,
            "image": "../../assets/images/food.jpg",
            "category": Category.food,
            "qty": 0,
            "rating": 3.5
        
          },{
            "id": 106,
            "name": "Product7",
            "price": 3000,
            "image": "../../assets/images/shirt.jpg",
            "category": Category.shirt,
            "qty": 0,
            "rating": 5
        
          },{
            "id": 107,
            "name": "Product8",
            "price": 4000,
            "image": "../../assets/images/jeans.jpg",
            "category": Category.jeans,
            "qty": 0,
            "rating": 4
        
          }];

        const flowers:IFlower[]=[
          {
            "id": "F001",
            "name": "Rose",
            "place": "Kolkata",
            "price": 200,
            "image": "../../assets/images/rose.jpg",
            "quantity": 50
          },
          {
            "id": "F002",
            "name": "Daffodil",
            "place": "Pune",
            "price": 850,
            "image": "../../assets/images/daffodil.jpg",
            "quantity": 30
          },
          {
            "id": "F003",
            "name": "Lily",
            "place": "Delhi",
            "price": 500,
            "image": "../../assets/images/lily.jpg",
            "quantity": 60
          },
          {
            "id": "F004",
            "name": "Lotus",
            "place": "Kolkata",
            "price": 700,
            "image": "../../assets/images/lotus.jpg",
            "quantity": 100
          },
          {
            "id": "F005",
            "name": "Sunflower",
            "place": "Ahmedabad",
            "price": 900,
            "image": "../../assets/images/sunflower.jpg",
            "quantity": 90
          },
          {
            "id": "F006",
            "name": "Tulip",
            "place": "Jaipur",
            "price": 400,
            "image": "../../assets/images/tulip.jpg",
            "quantity": 80
          }
        ];

        const todos:Todo[]=[
          {
            "id":"T001",
            "content":"Todo 1"
          },
          {
            "id":"T002",
            "content":"Todo 2"
          }

        ]

        const places:IPlace[]=[
          {
            "id":"T001",
            "name":"Kolkata",
            "imageUrl":"../../assets/images/kolkata.jpg",
            "seats":50,
            "price":6000,
            "days":7,
            "famous":"Victoria Memorial Hall"
          },
          {
            "id":"T002",
            "name":"Chennai",
            "imageUrl":"../../assets/images/chennai.jpg",
            "seats":40,
            "price":10000,
            "days":9,
            "famous":"Shri Asthalaxmi Temple"
          },
          {
            "id":"T003",
            "name":"Delhi",
            "imageUrl":"../../assets/images/delhi.jpg",
            "seats":90,
            "price":7000,
            "days":5,
            "famous":"India Gate"
          },
          {
            "id":"T004",
            "name":"Gujarat",
            "imageUrl":"../../assets/images/gujarat.jpg",
            "seats":40,
            "price":15000,
            "days":10,
            "famous":"Ahmedabad"
          },
          {
            "id":"T005",
            "name":"Jaipur",
            "imageUrl":"../../assets/images/jaipur.jpg",
            "seats":80,
            "price":12000,
            "days":8,
            "famous":"Hawa Mahal"
          },
          {
            "id":"T006",
            "name":"Kerala",
            "imageUrl":"../../assets/images/kerala.jpg",
            "seats":70,
            "price":20000,
            "days":18,
            "famous":"Kochi"
          }
        ]

        return {events,animals,flowers,todos,places, products};
    }

}