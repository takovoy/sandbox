import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GameScreenComponent} from './game-screen.component/game-screen.component';

const routes: Routes = [
  {
    path: 'game',
    component: GameScreenComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
