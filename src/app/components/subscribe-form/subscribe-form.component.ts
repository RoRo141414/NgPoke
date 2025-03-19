import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-subscribe-form',
  imports: [MatCardModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './subscribe-form.component.html',
  styleUrl: './subscribe-form.component.scss',
})
export class SubscribeFormComponent {
  @Output() public loginClicked = new EventEmitter<void>();
}
