import {Component, HostListener} from '@angular/core';
import {DOMEventsService} from 'src/services/DOMEvents.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private domEventsService: DOMEventsService) {}

  @HostListener('window:keyup', ['$event']) private fireKeyupEvent(event): void {
    this.domEventsService.keyboardListener.next(event);
  }
  @HostListener('window:keydown', ['$event']) private fireKeydownEvent(event): void {
    this.domEventsService.keyboardListener.next(event);
  }
}
