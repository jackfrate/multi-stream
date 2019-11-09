import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';
import { StreamListService } from '../stream-list.service';

@Component({
  selector: 'app-stream-size-adjuster',
  templateUrl: './stream-size-adjuster.component.html',
  styleUrls: ['./stream-size-adjuster.component.scss']
})
export class StreamSizeAdjusterComponent {
  readonly dialogTitle = 'Change Stream Size';

  columns: number;

  constructor(private layoutSvc: LayoutService, private streamSvc: StreamListService) {
    this.columns = this.layoutSvc.columns;
  }

  setColumnSize(cols: number) {
    // if the columns is > the streams that are there,
    // we lower columns to present streams
    let newCols = cols;
    if (newCols > this.streamSvc.getStreamSet().size) {
      newCols = this.streamSvc.getStreamSet().size;
    }

    this.layoutSvc.setColumns(cols);
    this.columns = this.layoutSvc.columns;
  }

}
