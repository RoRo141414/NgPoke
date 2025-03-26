import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PokemonsService } from '../../services/pokemons.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pokemon-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent {
  @Input() public name!: string;
  @Input() public detailUrl!: string;

  private readonly pokemonService = inject(PokemonsService);

  public imageUrl!: string;

  ngOnInit() {
    const urlAsArray = this.detailUrl.split('/');

    if (urlAsArray.length > 2 && urlAsArray[urlAsArray.length - 2]) {
      const id = urlAsArray[urlAsArray.length - 2];
      this.imageUrl = this.pokemonService.getImageUrl(id);
    }
  }
}
