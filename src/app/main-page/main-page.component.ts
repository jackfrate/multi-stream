import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NewStreamDialogComponent } from '../new-stream-dialog/new-stream-dialog.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor(private dialog: MatDialog) { }

  openAddDialog() {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(NewStreamDialogComponent, dialogConfig);
  }

  // TODO: for remove have a list of active streams that can be removed.
}
