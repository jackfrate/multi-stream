import { Component } from '@angular/core';
import { StreamListService } from '../stream-list.service';
import { StreamPair } from '../free-objects/stream-pair';

@Component({
  selector: 'app-new-stream-dialog',
  templateUrl: './new-stream-dialog.component.html',
  styleUrls: ['./new-stream-dialog.component.scss']
})
export class NewStreamDialogComponent {

  // fields for the dialog
  readonly dialogTitle = 'Add New Stream';
  serviceList: string[];

  constructor(
    private streamListSvc: StreamListService) {
    this.serviceList = streamListSvc.getStreamServices();
  }

  addStream(name: string, site: string): void {
    const pair = new StreamPair(name, site);
    this.streamListSvc.addStream(pair);
  }
}
