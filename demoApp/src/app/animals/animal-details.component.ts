import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Animal } from './animal';
import { AnimalService } from './animalservice';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit,OnDestroy{

  id:string='';
  anm:Animal| undefined;
  sub!:Subscription;

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private service:AnimalService) { }
  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((params)=>{
      console.log(params);
      let idd=params.get('id');
       if(idd){
         this.id=idd;
       }

      if(this.service.getAnimalById(this.id)){
            this.anm = this.service.getAnimalById(this.id);
      }
    })

  }
 back():void{
   this.router.navigate(['animals']);
 }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
