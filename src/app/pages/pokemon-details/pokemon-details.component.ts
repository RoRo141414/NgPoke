import { Component, inject, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
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
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent implements OnInit {
  private readonly pokemonService = inject(PokemonsService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  public pokemonId = this.route.snapshot.params?.['id'];

  public pokemonDetails$ = this.pokemonService.getDetails(this.pokemonId);

  ngOnInit(): void {
    console.log('Pokemon ID :', this.pokemonId);
  }

  public goBack(): void {
    this.router.navigateByUrl('/pokemon-list');
  }
}
