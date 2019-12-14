import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NewStreamDialogComponent } from '../new-stream-dialog/new-stream-dialog.component';
import { StreamSizeAdjusterComponent } from '../stream-size-adjuster/stream-size-adjuster.component';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  // chat stuff
  chatToggleSlider: boolean;

  // dialog stuff
  dialogWidth: string;

  chatOpen: boolean;

  constructor(
    private dialog: MatDialog,
    private layoutSvc: LayoutService) {
    this.chatOpen = this.layoutSvc.chatOpen;
  }

  // TODO: on resize, update chat dimensions

  //
  // add stream dialog methods
  //

  openAddDialog() {
    const dialogConfig = new MatDialogConfig();
    // ? we can change these
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    this.dialog.open(NewStreamDialogComponent, dialogConfig);
  }

  openAdjustStreamDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '300px';

    this.dialog.open(StreamSizeAdjusterComponent, dialogConfig);
  }

  //
  // chat methods
  //

  toggleChat() {
    this.chatOpen = !this.chatOpen;
    this.layoutSvc.chatOpen = this.chatOpen;
  }


  getChatState(): boolean {
    return this.layoutSvc.chatOpen;
  }
}
