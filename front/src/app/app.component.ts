import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CounterContainerComponent } from './counter-container/counter-container.component';
import { HeaderComponent } from './header/header.component';

@Component({
  standalone: true,
  imports: [RouterModule, CounterContainerComponent,HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'front';
}
