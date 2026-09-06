import { Component, signal } from '@angular/core';
import { Color, ColorOption, COLOR_OPTIONS } from '../../directives/color/color';

@Component({
  selector: 'app-directive-component',
  imports: [Color],
  templateUrl: './directive-component.html',
  styleUrl: './directive-component.scss',
})
export class DirectiveComponent {
  protected readonly colorOptions = COLOR_OPTIONS;
  protected readonly selectedColor = signal<ColorOption>('primary');

  selectColor(color: ColorOption): void {
    this.selectedColor.set(color);
  }
}
