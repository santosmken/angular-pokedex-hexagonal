import { Observable, tap } from 'rxjs';
import { Pokedex } from '../pokedex';
import { PokedexRepository } from '../ports/driven/pokedex.repository';
import { PokedexState } from '../ports/driven/pokedex.state';

export class PokedexQueryHandler {
  constructor(
    private readonly pokedexState: PokedexState,
    private readonly repository: PokedexRepository
  ) {}

  loadAll(): Observable<Pokedex[]> {
    return this.repository.getAll().pipe(
      tap({
        next: (pokemons) => this.pokedexState.set(pokemons),
      })
    );
  }

  selectAll(): Observable<Pokedex[]> {
    return this.pokedexState.selectAll();
  }
}
