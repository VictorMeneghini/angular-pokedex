import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-loading',
  templateUrl: './poke-loading.component.html',
  styleUrls: ['./poke-loading.component.scss']
})
export class PokeLoadingComponent implements OnInit {
  @Input() size:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
