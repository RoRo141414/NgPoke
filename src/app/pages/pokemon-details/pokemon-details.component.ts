import { Component, inject, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
<<<<<<< Updated upstream
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-pokemon-details',
  imports: [
    AsyncPipe,
    MatCardModule,
    MatButtonModule,
    MatAccordion,
    MatExpansionModule,
    MatIconModule,
    MatChipsModule,
    MatListModule,
    MatProgressBarModule,
  ],
=======
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-details',
  imports: [CommonModule, AsyncPipe, TitleCasePipe],
>>>>>>> Stashed changes
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent implements OnInit {
  private readonly pokemonService = inject(PokemonsService);
  private readonly route = inject(ActivatedRoute);
<<<<<<< Updated upstream
  private readonly router = inject(Router);
=======
>>>>>>> Stashed changes

  public pokemonId = this.route.snapshot.params?.['id'];

  public pokemonDetails$ = this.pokemonService.getDetails(this.pokemonId);

  ngOnInit(): void {
    console.log('Pokemon ID :', this.pokemonId);
  }
<<<<<<< Updated upstream

  public goBack(): void {
    this.router.navigateByUrl('/pokemon-list');
  }
=======
>>>>>>> Stashed changes
}
