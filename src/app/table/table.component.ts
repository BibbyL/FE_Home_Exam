import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDefect } from '../mock-data.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() defectData: IDefect[] = []
  @Input() selectedDefect: IDefect = { uuid: '', x: -1, y: -1, severity: 0 }
  @Output() onSelectDefect: EventEmitter<any> = new EventEmitter();

  constructor() { }

  indeterminate = false;
  listOfCurrentPageData: readonly IDefect[] = [];
  setOfCheckedId = new Set<String>();

  ngOnInit(): void { }

  ngOnChanges(): void {
    this.setOfCheckedId.clear()
    if (this.selectedDefect.uuid != '') {
      this.setOfCheckedId.add(this.selectedDefect.uuid)
    }
  }

  updateCheckedSet(uuid: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(uuid);
    } else {
      this.setOfCheckedId.delete(uuid);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly IDefect[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
  }

  onItemChecked(data: IDefect, checked: boolean): void {
    this.updateCheckedSet(data.uuid, checked);
    this.onSelectDefect.emit(checked ? data : { uuid: '', x: -1, y: -1, severity: 0 })
  }

}
