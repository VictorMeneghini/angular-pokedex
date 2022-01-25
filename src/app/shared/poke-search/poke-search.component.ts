import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {
  @Output() public emmitSearch:EventEmitter<any> = new EventEmitter


  constructor() { }

  ngOnInit(): void {
  }

  public search(value: string) {
    this.emmitSearch.emit(value)
  }

}
