import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NewStreamDialogComponent } from '../new-stream-dialog/new-stream-dialog.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  chatOpen: boolean;
  dialogHeight: string;
  dialogWidth: string;

  constructor(private dialog: MatDialog) {
    // TODO: set chat open here from the chat service
  }

  openAddDialog() {
    const dialogConfig = new MatDialogConfig();
    // ? we can change these
    this.dialogWidth = '400px';
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = this.dialogWidth;

    this.dialog.open(NewStreamDialogComponent, dialogConfig);
  }

  // TODO: for remove have a list of active streams that can be removed.
}
