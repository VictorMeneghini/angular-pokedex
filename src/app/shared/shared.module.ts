import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { RouterModule } from '@angular/router';
import { PokeLoadingComponent } from './poke-loading/poke-loading.component';

@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokeLoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PokeHeaderComponent,
    PokeListComponent,
    PokeSearchComponent,
    PokeLoadingComponent
  ]
})
export class SharedModule { }
