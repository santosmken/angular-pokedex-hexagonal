import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokedex } from '../../core/pokedex';
import { PokedexState } from '../../core/ports/driven/pokedex.state';

@Injectable()
export class PokedexStore implements PokedexState {
  pokemons$ = new BehaviorSubject<Pokedex[]>([]);

  set(data: Pokedex[]): void {
    this.pokemons$.next(data);
  }

  selectAll(): Observable<Pokedex[]> {
    return this.pokemons$.asObservable();
  }
}
