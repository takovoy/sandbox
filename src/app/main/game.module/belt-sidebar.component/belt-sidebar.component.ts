import {Component, Input} from '@angular/core';
import {InventoryModelNamespace} from 'src/models/InventoryModel.namespace';

@Component({
  selector: 'belt-sidebar',
  templateUrl: 'belt-sidebar.component.html',
  styleUrls: ['belt-sidebar.component.scss'],
})
export class BeltSidebarComponent {
  @Input() public items: InventoryModelNamespace.IInventoryItem[] = [];
}
