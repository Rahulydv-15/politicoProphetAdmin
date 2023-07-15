import { Component, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('300ms', style({ opacity: 1 }))]),
    ]),
  ],
})
export class ErrorComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  onMouseMove(event: MouseEvent | TouchEvent) {
    const point = event instanceof MouseEvent ? event : event.touches[0];
    const eyes = document.querySelectorAll('.eye');
    const x =
      eyes[0].getBoundingClientRect().left +
      eyes[0].getBoundingClientRect().width / 2;
    const y =
      eyes[0].getBoundingClientRect().top +
      eyes[0].getBoundingClientRect().height / 2;
    const rad = Math.atan2(point.pageX - x, point.pageY - y);
    const rot = rad * (180 / Math.PI) * -1 + 180;

    eyes.forEach((eye: any) => {
      eye.style.transform = `rotate(${rot}deg)`;
    });
  }
}
