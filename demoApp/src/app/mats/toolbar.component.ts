import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  ngOnInit(): void {
    this.href=this.router.url;
  }

  href:string='';
  cont:boolean=true;

  constructor(private router:Router){};

  navigateHome():void{
    //this.cont=false;
    this.router.navigate(['mathome']);
    
  }



}
