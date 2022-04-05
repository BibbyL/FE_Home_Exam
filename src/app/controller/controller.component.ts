import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd/slider';
import { IDefect } from '../mock-data.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  value = 100;

  marks: NzMarks = {
    10: '10',
    100: '100',
  };

  @Input() selectedDefect: IDefect = { uuid: '', x: -1, y: -1, severity: 0 }
  @Output() onChangeSeverity: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit(): void { }

  onSlideSeverity(severityValue: any) {
    this.onChangeSeverity.emit(severityValue)
  }
}
