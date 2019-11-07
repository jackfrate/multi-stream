import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NewStreamDialogComponent } from '../new-stream-dialog/new-stream-dialog.component';
import { ChatService } from '../chat.service';
import { realpath } from 'fs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  // chat stuff
  chatOpen: boolean;

  // dialog stuff
  dialogWidth: string;

  constructor(private dialog: MatDialog, private chatSvc: ChatService) {
    this.chatOpen = chatSvc.isChatOpen();
  }

  //
  // add stream dialog methods
  //

  openAddDialog() {
    const dialogConfig = new MatDialogConfig();
    // ? we can change these
    this.dialogWidth = '400px';
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = this.dialogWidth;

    this.dialog.open(NewStreamDialogComponent, dialogConfig);
  }

  //
  // chat methods
  //

  toggleChat() {
    this.chatSvc.toggleChat();
  }

  // TODO: for remove have a list of active streams that can be removed.
}
