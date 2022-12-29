import { Component } from "@angular/core";
import { LoggingService } from "shared/logging.service";

@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent{

    constructor(private loggingService: LoggingService){}


    //value:string=this.loggingService.log();

    logValue():void{
        console.log(this.loggingService.log());
    }
    
    num:number=2;
    name:string= 'Ayantika';
    title:string="My name is Ayantika Datta";
}