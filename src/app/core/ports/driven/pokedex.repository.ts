import { Observable } from 'rxjs';
import { Pokedex } from '../../pokedex';

export interface PokedexRepository {
  getAll(): Observable<Pokedex[]>;
}
