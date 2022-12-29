import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-icon',
  templateUrl: './star-icon.component.html',
  styleUrls: ['./star-icon.component.css']
})
export class StarIconComponent implements OnInit,OnChanges{
  cropWidth:number=75;
  @Input() rating:number=0;
  @Input() message:string='';

  @Output() ratingClicked:EventEmitter<string> =new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(this.rating);
    //console.log(this.cropWidth);
    this.cropWidth=this.rating* 75/5;
    //console.log(this.cropWidth);
  }
  ngOnInit(): void {
    
  }

  onClick():void{

    let msg =  document.querySelector('#p1')?.textContent ?? 'hello';
    this.ratingClicked.emit(msg);
  }


}
