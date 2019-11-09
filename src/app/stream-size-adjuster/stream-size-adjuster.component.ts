import { Component, OnInit, OnChanges } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-stream-size-adjuster',
  templateUrl: './stream-size-adjuster.component.html',
  styleUrls: ['./stream-size-adjuster.component.scss']
})
export class StreamSizeAdjusterComponent {
  readonly dialogTitle = 'Change Stream Size';

  columns: number;

  constructor(private layoutSvc: LayoutService) {
    this.columns = this.layoutSvc.columns;
  }

  setColumnSize(cols: number) {
    this.layoutSvc.setColumns(cols);
    this.columns = this.layoutSvc.columns;
  }

}
