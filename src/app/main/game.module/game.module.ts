import {NgModule} from '@angular/core';
import {GameScreenComponent} from './game-screen.component/game-screen.component';
import {GameRoutingModule} from './game-routing.module';
import {AbilitiesComponent} from './abilities.component/abilities.component';
import {InventoryComponent} from './inventory.component/inventory.component';
import {BeltSidebarComponent} from './belt-sidebar.component/belt-sidebar.component';
import {GameRenderPlaneComponent} from './game-render-plane.component/game-render-plane.component';

@NgModule({
  declarations: [
    GameScreenComponent,
    AbilitiesComponent,
    InventoryComponent,
    BeltSidebarComponent,
    GameRenderPlaneComponent,
  ],
  imports: [
    GameRoutingModule,
  ],
})
export class GameModule {}
