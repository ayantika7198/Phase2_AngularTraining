import { RtlScrollAxisType } from '@angular/cdk/platform';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FlowerService } from 'src/app/shared/flower.service';
import { IFlower } from './flower';

@Component({
  selector: 'app-add-flower',
  templateUrl: './add-flower.component.html',
  styleUrls: ['./add-flower.component.css']
})
export class AddFlowerComponent implements OnInit,OnDestroy{

  pageTitle='Add Flower';
  addFlower!:FormGroup;
  errorMessage='';

  flower!:IFlower | null;
  sub!:Subscription;

  constructor(private formBuilder:FormBuilder, private router:Router, private flowerService:FlowerService){}
  ngOnInit(): void {
    this.addFlower=this.formBuilder.group({
      id:['',[Validators.required]],
      name:['',[Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      place:['',[Validators.required]],
      price:[0,[Validators.required, Validators.min(0), Validators.max(30000)]],
      image:[''],
      quantity:[0,[Validators.required]]
    });

    this.sub=this.flowerService.selectedFlowerChanges$.subscribe(selFlow=>this.displayFlower(selFlow));


  }

  public myError = (controlName: string, errorName: string) =>{
    return this.addFlower.controls[controlName].hasError(errorName);
    }

  get id(){
    return this.addFlower.get("id");
  }

  get name(){
    return this.addFlower.get("name");
  }

  get place(){
    return this.addFlower.get("place");
  }

  get price(){
    return this.addFlower.get("price");
  }

  get image(){
    return this.addFlower.get("image");
  }

  get quantity(){
    return this.addFlower.get("quantity");
  }

  displayFlower(flowerParam:IFlower|null){
    this.flower=flowerParam;
    if(this.flower){
      this.addFlower.reset();

      this.addFlower.patchValue({
        id:this.flower.id,
        name:this.flower.name,
        place:this.flower.place,
        price:this.flower.price,
        image:this.flower.image,
        quantity:this.flower.quantity
      })
    }
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  

  saveFlower(originalFlower:IFlower | null):void{
    if(this.addFlower.valid){
      if(this.addFlower.dirty){
        const flower={...originalFlower,...this.addFlower.value};

        this.flowerService.createFlower(flower).subscribe(
          (resp)=>{
            this.flowerService.changeSelectedFlower(resp);
          },
          (err)=>this.errorMessage=err

        );
      }

      this.router.navigate(['flowers']);
    }

  }



}
