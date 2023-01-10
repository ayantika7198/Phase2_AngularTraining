import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-mathome',
  templateUrl: './mathome.component.html',
  styleUrls: ['./mathome.component.css']
})
export class MathomeComponent implements OnInit{

  href:string='';

  constructor(private router: Router, private route:ActivatedRoute, private breakpointObserver: BreakpointObserver){}
  ngOnInit(): void {
    this.href=this.router.url;
  }

  manager(){
    this.router.navigate(['manager'],{relativeTo:this.route});
  }

  user(){
    this.router.navigate(['user'],{relativeTo:this.route});
  }
  products(){
  this.router.navigate(['product'],{relativeTo:this.route});
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

}
