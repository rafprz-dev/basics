import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.html',
  styleUrl: './hooks.scss',
})
export class Hooks
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() value = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.value);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck', this.value);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit', this.value);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked', this.value);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.value);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked', this.value);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy', this.value);
  }

  change() {
    this.value = 'changed';
  }
}
