import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';

/**
 * Composant racine de l'application NgPoke.
 * Il définit la structure de base de l'application et intègre la navigation principale.
 */
@Component({
  selector: 'app-root',
<<<<<<< Updated upstream
=======
  standalone: true,
>>>>>>> Stashed changes
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'NgPoke';

<<<<<<< Updated upstream
  public userService = inject(UserService);
=======
  // Injection du UserService pour gérer les données utilisateur dans toute l'application
  public readonly userService = inject(UserService);
>>>>>>> Stashed changes
}
