import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatSlideToggleChange } from '@angular/material';
import { NewStreamDialogComponent } from '../new-stream-dialog/new-stream-dialog.component';
import { ChatService } from '../chat.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

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

  constructor(private dialog: MatDialog, private chatSvc: ChatService) {
    this.chatOpen = true;
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
    this.dialogWidth = '400px';
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = this.dialogWidth;

    this.dialog.open(NewStreamDialogComponent, dialogConfig);
  }

  //
  // chat methods
  //

  toggleChat(event: MatSlideToggleChange) {
    this.chatOpen = event.checked;
  }
}
