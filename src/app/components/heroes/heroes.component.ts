import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = [];

  constructor( private _heroesServices:HeroesService,
      private router:Router
  ) {
    console.log("constructor");
   }

  ngOnInit() {
    /*console.log("ngoninit");*/

   this.heroes = this._heroesServices.getHeroes();
   console.log(this.heroes);
 }

   verHeroe( idx:number ){
     console.log(idx);
     this.router.navigate(['/heroe',idx])
   }

  }
