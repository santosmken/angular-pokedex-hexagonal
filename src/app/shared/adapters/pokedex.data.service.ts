import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pokedex } from '../../core/pokedex';
import { PokedexRepository } from '../../core/ports/driven/pokedex.repository';
import { PokedexHttp } from '../pokedex-api/pokedex.http';

@Injectable()
export class PokedexDataService implements PokedexRepository {
  private pokedexHttp = inject(PokedexHttp);

  getAll(): Observable<Pokedex[]> {
    return this.pokedexHttp.getAll().pipe(map(({ results }) => results));
  }
}
