import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatSlideToggleChange } from '@angular/material';
import { NewStreamDialogComponent } from '../new-stream-dialog/new-stream-dialog.component';
import { ChatService } from '../chat.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { StreamSizeAdjusterComponent } from '../stream-size-adjuster/stream-size-adjuster.component';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  // chat stuff
  chatOpen: boolean;
  chatToggleSlider: boolean;

  // dialog stuff
  dialogWidth: string;

  formGroup: FormGroup;

  constructor(
    private dialog: MatDialog,
    private layoutSvc: LayoutService) {
    this.chatOpen = this.layoutSvc.chatOpen;
  }


  // onChange() {
  //   this.toggleChat();
  // }

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
    this.layoutSvc.toggleChat();
    this.chatOpen = this.layoutSvc.chatOpen;
  }
}
