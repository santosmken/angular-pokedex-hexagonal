import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { PokedexResponse } from './dto/pokedex.response';

@Injectable({
  providedIn: 'root',
})
export class PokedexHttp {
  private http = inject(HttpClient);

  getAll(): Observable<PokedexResponse> {
    return this.http
      .get<PokedexResponse>('https://pokeapi.co/api/v2/pokemon/?limit=150')
      .pipe(tap(console.log));
  }

  getById(id: string): Observable<any> {
    return of({
      name: '',
      url: '',
    });
  }
}
