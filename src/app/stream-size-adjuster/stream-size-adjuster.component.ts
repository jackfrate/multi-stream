import { Component, OnInit, OnChanges } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-stream-size-adjuster',
  templateUrl: './stream-size-adjuster.component.html',
  styleUrls: ['./stream-size-adjuster.component.scss']
})
export class StreamSizeAdjusterComponent implements OnChanges {
  readonly dialogTitle = 'Change Stream Size';

  addSize: number;

  constructor(private layoutSvc: LayoutService) {
    this.addSize = this.getAddSize();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.layoutSvc.additionalSize = this.getAddSize();
  }

  // call on event when number is changed
  setAddSize(size: number) {
    this.layoutSvc.additionalSize = size;
  }

  getAddSize(): number {
    return this.layoutSvc.additionalSize;
  }
}
