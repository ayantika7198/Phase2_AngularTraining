import { Injectable } from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IEvent } from "src/app/events/event";
import { Category, IProduct } from "src/app/products/product";

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

        const products:IProduct[]=[{
            "id": "P01",
            "name": "Product1",
            "price": 2000,
            "imageUrl": "../../assets/images/jeans.jpg",
            "category": Category.jeans,
            "quantity": 0,
            "rating": 4
        
          },{
            "id": "P02",
            "name": "Product2",
            "price": 1000,
            "imageUrl": "../../assets/images/grocery.jpg",
            "category": Category.grocery,
            "quantity": 0,
            "rating": 3.5
        
          },{
            "id": "P03",
            "name": "Product3",
            "price": 3000,
            "imageUrl": "../../assets/images/shirt.jpg",
            "category": Category.shirt,
            "quantity": 0,
            "rating": 5
        
          },{
            "id": "P04",
            "name": "Product4",
            "price": 1500,
            "imageUrl": "../../assets/images/top.jpg",
            "category": Category.top,
            "quantity": 0,
            "rating": 3
        
          },{
            "id": "P05",
            "name": "Product5",
            "price": 1000,
            "imageUrl": "../../assets/images/food.jpg",
            "category": Category.food,
            "quantity": 0,
            "rating": 3.5
        
          },{
            "id": "P06",
            "name": "Product6",
            "price": 2000,
            "imageUrl": "../../assets/images/food.jpg",
            "category": Category.food,
            "quantity": 0,
            "rating": 3.5
        
          },{
            "id": "P07",
            "name": "Product7",
            "price": 3000,
            "imageUrl": "../../assets/images/shirt.jpg",
            "category": Category.shirt,
            "quantity": 0,
            "rating": 5
        
          },{
            "id": "P08",
            "name": "Product8",
            "price": 4000,
            "imageUrl": "../../assets/images/jeans.jpg",
            "category": Category.jeans,
            "quantity": 0,
            "rating": 4
        
          }];

        return {events, products};
    }

}