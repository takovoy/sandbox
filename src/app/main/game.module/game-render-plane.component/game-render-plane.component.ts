import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ExcessorArchitecture} from '../../../common/excessorTS/excessor.namespace';
import {Draw} from '../../../common/excessorTS/excessor';

@Component({
  selector: 'game-render-plane',
  templateUrl: 'game-render-plane.component.html',
  styleUrls: ['game-render-plane.component.scss'],
})
export class GameRenderPlaneComponent implements OnInit {
  private draw: ExcessorArchitecture.IDraw;

  constructor(private hostElement: ElementRef) {}

  public ngOnInit() {
    console.dir(this.hostElement.nativeElement);
    this.draw = new Draw(this.hostElement.nativeElement.offsetWidth, this.hostElement.nativeElement.offsetHeight);
    this.hostElement.nativeElement.appendChild(this.draw.CanvasDOMObject);
  }
}
