import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-number-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './number-display.component.html',
  styleUrl: './number-display.component.css',
})
export class NumberDisplayComponent {
  @Input('display') displayValue: number | null = 0;
}
