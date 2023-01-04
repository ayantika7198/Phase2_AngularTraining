import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from "rxjs";
import { IFlower } from "src/app/flowers/flower";

@Injectable({
    providedIn: 'root'
})

export class FlowerService{

    foundIndex:number=0;
     url="api/flowers";
    flowers:IFlower[]=[];

    private selectedFlowerSource= new BehaviorSubject<IFlower | null >(null);

    selectedFlowerChanges$=this.selectedFlowerSource.asObservable();

    constructor(private http:HttpClient){}

    getFlowers():Observable<IFlower[]>{
        return this.http.get<IFlower[]>(this.url).pipe(
            tap(data=>{
                this.flowers=data;
            }),
            catchError(this.errorHandler)
        );
    }

    errorHandler=(err:any)=>{
        let errorMessage:string;

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

    changeSelectedFlower(selectedFlower:IFlower | null):void{
        this.selectedFlowerSource.next(selectedFlower);
    }

    newFlower():IFlower{
        return{
            "id":'',
            "name":'Flower',
            "place":'Kolkata',
            "image":"\\assets\\images\\rose.jpg",
            "price":200,
            "quantity":0
        };
    }

    createFlower(flower:IFlower):Observable<IFlower>{
        const headers= new HttpHeaders({'Content-Type':'application/json'});

        const newFlower={...flower};

        return this.http.post<IFlower>(this.url,newFlower,{headers}).pipe(
            tap(data=>{
                this.flowers.push(data);
            },
            catchError(this.errorHandler)
            )
        )
    }

    deleteFlower(id:string):Observable<{}>{
        const headers= new HttpHeaders({'Content-Type':'application/json'});
        const url= `${this.url}/${id}`;

        return this.http.delete<IFlower>(url,{headers}).pipe(
            tap(data=>{
                const foundIndex = this.flowers.findIndex(item=>item.id===id);

                if(foundIndex > -1)
                    this.flowers.splice(foundIndex,1);
            },
                catchError(this.errorHandler)
            )

        );
    }

    updateFlower(flower:IFlower):Observable<IFlower>{
        const headers= new HttpHeaders({'Content-Type':'application/json'});

        const url= `${this.url}/${flower.id}`;

        return this.http.put<IFlower>(url,flower,{headers}).pipe(
            tap(()=>{
                const foundIndex =this.flowers.findIndex(item=>item.id === flower.id);
            if(foundIndex > -1){
                this.flowers[foundIndex]=flower;
        }
            }),
            map(()=>flower),
            catchError(this.errorHandler)
        );
    }
}