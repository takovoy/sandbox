import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ExcessorArchitecture} from 'app/common/excessorTS/excessor.namespace';
import {Draw} from 'app/common/excessorTS/dist/draw';

@Component({
  selector: 'game-render-plane',
  templateUrl: 'game-render-plane.component.html',
  styleUrls: ['game-render-plane.component.scss'],
})
export class GameRenderPlaneComponent implements OnInit {
  private draw: ExcessorArchitecture.IDraw;

  constructor(private hostElement: ElementRef) {}

  public ngOnInit(): void {
    this.draw = new Draw(this.hostElement.nativeElement.offsetWidth, this.hostElement.nativeElement.offsetHeight);
    this.hostElement.nativeElement.appendChild(this.draw.CanvasDOMObject);
  }
}
