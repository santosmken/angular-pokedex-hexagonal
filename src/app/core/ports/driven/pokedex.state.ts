import { Observable } from 'rxjs';
import { Pokedex } from '../../pokedex';

export interface PokedexState {
  set(data: Pokedex[]): void;
  selectAll(): Observable<Pokedex[]>;
}
