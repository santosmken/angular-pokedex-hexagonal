import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokedex } from './core/pokedex';
import { PokedexRepository } from './core/ports/driven/pokedex.repository';
import { PokedexState } from './core/ports/driven/pokedex.state';
import { PokedexQueryHandler } from './core/queries/pokedex.query-handler';
import { PokedexDataService } from './shared/adapters/pokedex.data.service';
import { PokedexStore } from './shared/adapters/pokedex.store';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterModule],
  providers: [
    {
      provide: PokedexQueryHandler,
      useFactory: (pokedexState: PokedexState, repository: PokedexRepository) =>
        new PokedexQueryHandler(pokedexState, repository),
      deps: [PokedexStore, PokedexDataService],
    },
    PokedexStore,
    PokedexDataService,
  ],
})
export class AppComponent {
  title = 'angular-pokedex-hexagonal';

  pokemons$!: Observable<Pokedex[] | undefined>;

  constructor(private readonly pokedexQueryHandler: PokedexQueryHandler) {
    this.pokemons$ = this.pokedexQueryHandler.selectAll();

    // This could be move to resolver
    this.pokedexQueryHandler.loadAll().subscribe(console.log);
  }
}
