import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomButtonsComponent } from './custom-buttons/custom-buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomButtonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 18 with PrimeNG & PrimeFlex';
}
