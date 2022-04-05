import { Component } from '@angular/core';

import { MockDataService, IDefect } from './mock-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defectData: IDefect[] = []
  defectData_display: IDefect[] = []

  selectedDefect: IDefect = { uuid: '', x: -1, y: -1, severity: 0 }

  constructor(public dataSrv: MockDataService) {
    this.init()
  }

  init() {
    this.defectData_display = this.defectData = this.dataSrv.getDefectData()
  }

  onChangeSeverity(severityValue: number) {
    this.clearSelectedDefect()
    this.defectData_display = this.defectData.filter(data => {
      return data.severity <= severityValue
    })
  }


  onSelectDefect(data: IDefect) {
    this.selectedDefect = data
  }

  clearSelectedDefect() {
    this.selectedDefect = { uuid: '', x: -1, y: -1, severity: 0 }
  }


}
