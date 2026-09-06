import { Directive, HostBinding, Input } from '@angular/core';

export type ColorOption = 'primary' | 'success' | 'danger' | 'warning' | 'info';

const COLOR_MAP: Record<ColorOption, string> = {
  primary: '#3f51b5',
  success: '#2e7d32',
  danger: '#c62828',
  warning: '#f9a825',
  info: '#0277bd',
};

export const COLOR_OPTIONS: ColorOption[] = Object.keys(COLOR_MAP) as ColorOption[];

@Directive({
  selector: '[appColor]',
})
export class Color {
  @Input('appColor') color: ColorOption = 'primary';

  @HostBinding('style.color')
  get textColor(): string {
    return COLOR_MAP[this.color];
  }
}
