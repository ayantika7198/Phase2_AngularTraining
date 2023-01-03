import { Injectable } from "@angular/core";
import { User } from "./user";

@Injectable({
    providedIn:'root'
})
export class AuthService{


    currentUser!:User |null;
    redirectToUrl!:string;

    constructor(){}

    isLoggedIn():boolean{
        return !!this.currentUser;
    }

    users:string[]=['ayantika','chandni']

    login(username:string,password:string):void{

    if(this.users.includes(username)){
     this.currentUser={
        username,
        password,
        isAdmin:true
     };
    }else{
        this.currentUser={
            username,
            password,
            isAdmin:false 
    };

    console.log(this.currentUser.username);
}

    }

    logOut():void{
        this.currentUser=null;
    }
}