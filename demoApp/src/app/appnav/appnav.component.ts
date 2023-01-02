import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../users/authservice';

@Component({
  selector: 'appnav',
  templateUrl: './appnav.component.html',
  styleUrls: ['./appnav.component.css']
})
export class AppnavComponent {

  pageTitle:string='Online Shopping';

get isLoggedIn():boolean{
  
  return this.authservice.isLoggedIn();
}


get username():string{

if(this.authservice.currentUser)
return this.authservice.currentUser?.username;

return '';

}
constructor(private router:Router,private authservice:AuthService){}


  ngOnInit(): void {
  }

  logOut():void{
    this.authservice.logOut();
    this.router.navigate(['/about']);
  }

}
