import { Routes } from '@angular/router';
import { EventLoop } from './pages/event-loop/event-loop';
import { Hooks } from './pages/hooks/hooks';
import { DirectiveComponent } from './pages/directive-component/directive-component';

export const routes: Routes = [
  {
    path: 'event-loop',
    component: EventLoop,
  },
  {
    path: 'hooks',
    component: Hooks,
  },
  {
    path: 'directive-component',
    component: DirectiveComponent,
  },
];
