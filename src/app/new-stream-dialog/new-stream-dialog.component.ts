import { Component, OnInit } from '@angular/core';
import { StreamListService } from '../stream-list.service';

@Component({
  selector: 'app-new-stream-dialog',
  templateUrl: './new-stream-dialog.component.html',
  styleUrls: ['./new-stream-dialog.component.scss']
})
export class NewStreamDialogComponent implements OnInit {

  // fields for the dialog
  readonly dialogTitle = 'Add New Stream';
  serviceList: string[];

  constructor(streamListSvc: StreamListService) {
    this.serviceList = streamListSvc.getStreamServices();
  }

  ngOnInit() {
  }



}
