import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MyPokemonsComponent } from './pages/my-pokemons/my-pokemons.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';

export const routes: Routes = [
  { path: 'my-pokemons', component: MyPokemonsComponent },
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: 'login' },
];
