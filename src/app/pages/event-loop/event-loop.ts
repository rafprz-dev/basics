import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-loop',
  templateUrl: './event-loop.html',
  styleUrl: './event-loop.scss',
})
export class EventLoop implements OnInit {
  ngOnInit(): void {
    console.log('1 synchronous'); //synchronous code runs first

    setTimeout(() => {
      console.log('2 macrotask first synchronous'); // macrotask runs after synchronous code

      Promise.resolve().then(() => {
        console.log('3 microtask asynchronous'); // microtask runs after macrotask
      });

      queueMicrotask(() => {
        console.log('4 microtask asynchronous'); // microtask runs after macrotask
      });

      setTimeout(() => {
        console.log('5 macrotask asynchronous'); // macrotask runs after previous macrotask
      }, 0);
    }, 0);

    Promise.resolve().then(() => {
      console.log('6 microtask first synchronous'); // microtask runs after previous microtasks

      setTimeout(() => {
        console.log('7 macrotask synchronous'); // macrotask runs after previous macrotasks
      }, 0);

      Promise.resolve().then(() => {
        console.log('8 microtask asynchronous'); // microtask runs after previous microtasks
      });
    });

    queueMicrotask(() => {
      console.log('9 microtask  first synchronous'); // microtask runs after previous microtasks

      Promise.resolve().then(() => {
        console.log('10 microtask asynchronous'); // microtask runs after previous microtasks
      });

      queueMicrotask(() => {
        console.log('11 microtask asynchronous'); // microtask runs after previous microtasks
      });
    });

    setTimeout(() => {
      console.log('12 macrotask first synchronous'); // macrotask runs after previous macrotasks

      Promise.resolve().then(() => {
        console.log('13 microtask asynchronous'); // microtask runs after previous microtasks
      });
    }, 0);

    console.log('14 synchronous'); //synchronous code runs first
  }
}
