import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FlowerService } from 'src/app/shared/flower.service';
import { IFlower } from './flower';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.css']
})
export class FlowerListComponent implements OnInit, OnDestroy{

  sub!:Subscription;
  flowers:IFlower[]=[];
  errorMessage:string='';
  href:string='';
  show:boolean=false;
  testFlowers!:IFlower;

  constructor(private flowerService:FlowerService, private router:Router){}


  ngOnInit(): void {
    this.href=this.router.url;

    this.sub=this.flowerService.getFlowers().subscribe(
      (resp)=>{
        this.flowers=resp;
      },
      err=>{
        this.errorMessage=err;
        console.log(err);
      }
    )


    
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  newFlower():void{
    this.flowerService.changeSelectedFlower(this.flowerService.newFlower());

    this.router.navigate(['addFlower']);
  }

  flowerSelected(flower:IFlower):void{
    this.flowerService.changeSelectedFlower(flower);

    this.router.navigate([this.href,'editFlower']);
  }

  deleteProduct(flower: IFlower):void{
    if(flower && flower.id){
      if(confirm(`Are You sure to delete ${flower.name} details`)){
        this.flowerService.deleteFlower(flower.id).subscribe(
          (resp)=>this.flowerService.changeSelectedFlower(null),
          err=>this.errorMessage=err
        );
      }else{
        this.flowerService.changeSelectedFlower(null);
      }
    }
  }

}
