import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from "rxjs";
import { IPlace } from "../tourism/place";

@Injectable({
    providedIn:'root'
})

export class PlaceService{

    public url="api/places";

    places:IPlace[]=[];

    private selectedPlaceSource=new BehaviorSubject<IPlace | null>(null);

    selectedPlaceChanges$=this.selectedPlaceSource.asObservable();

    constructor(private http:HttpClient){}

    getPlaces():Observable<IPlace[]>{

        return this.http.get<IPlace[]>(this.url).pipe(
            tap(data=>{
                //console.log(data);
                this.places=data;
                //console.log(this.places);
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

       changeSelectedPlace(selectedPlace: IPlace|null ):void{
           this.selectedPlaceSource.next(selectedPlace);
       }

       newPlace():IPlace{
           return {
               id: '',
               name: '',
               price: 0,
               imageUrl: '\\assets\\images\\kolkata.jpg',
               seats: 0,
               days: 0,
               famous: ''

           };
       }

       createPlace(place: IPlace):Observable<IPlace>{
        const headers= new HttpHeaders({'Content-Type':'application/json'});

        const newPlace={...place};

        return this.http.post<IPlace>(this.url, newPlace,{headers}).pipe(
            tap(data=>{

            },
                catchError(this.errorHandler)
            )
        )

       }

       deletePlace(id:string):Observable<{}>{
        const headers= new HttpHeaders({'Content-Type':'application/json'});

        const url=`${this.url}/${id}`;

        return this.http.delete<IPlace>(url,{headers}).pipe(
            tap(data=>{

            },
            catchError(this.errorHandler)
            )
        );
       }

       updatePlace(place:IPlace):Observable<IPlace>{
        const headers= new HttpHeaders({'Content-Type':'application/json'});

        const url=`${this.url}/${place.id}`;

        return this.http.put<IPlace>(url,place, {headers}).pipe(
            tap(()=>{

            }),

            map(()=>place),
            catchError(this.errorHandler)
        );
        
       }
}