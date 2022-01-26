import { Component, HostListener, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  public getAllPokemons: any;
  private setAllPokemons: any;
  private currentLimit: number = 200
  private currentOffSet: number = 0

  constructor(
    private pokeApiService:PokeApiService
  ) { }

  ngOnInit(): void {

    this.pokeApiService.apiListAllPokemons(this.currentOffSet, this.currentLimit).subscribe(res => {
      this.setAllPokemons = res.results
      this.getAllPokemons = this.setAllPokemons
      
    });
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res:any) => {
      return !res.name.indexOf(value.toLocaleLowerCase())
    })

    this.getAllPokemons = filter
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event:any) {

    let screenHeight = document.documentElement.scrollHeight
    let currentScrollPosition = document.documentElement.scrollTop + document.documentElement.clientHeight;
    
    if(currentScrollPosition == screenHeight )   {
      this.currentOffSet += this.currentLimit 
      
      this.pokeApiService.apiListAllPokemons(this.currentOffSet, this.currentLimit).subscribe(res => {
        res.results.forEach((element:any) => {
          this.getAllPokemons.push(element)
        });    
      });
    }
    
  }

}
