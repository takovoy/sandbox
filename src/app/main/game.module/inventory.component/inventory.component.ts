import {Component, Input} from '@angular/core';
import {InventoryModelNamespace} from 'src/models/InventoryModel.namespace';

@Component({
  selector: 'inventory',
  templateUrl: 'inventory.component.html',
  styleUrls: ['inventory.component.scss'],
})
export class InventoryComponent {
  @Input() public items: InventoryModelNamespace.IInventoryItem[] = [];
}
