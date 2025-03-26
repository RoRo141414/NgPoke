import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PokemonListDto } from '../models/pokemon-list-dto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private readonly http = inject(HttpClient);

  public getList(url?: string): Observable<PokemonListDto> {
    return this.http.get<PokemonListDto>(
      url ? url : 'https://pokeapi.co/api/v2/pokemon'
    );
  }

  public getImageUrl(pokemonId: string): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  }
}
