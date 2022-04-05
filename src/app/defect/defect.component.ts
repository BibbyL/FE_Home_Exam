import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDefect } from '../mock-data.service'
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-defect',
  templateUrl: './defect.component.html',
  styleUrls: ['./defect.component.css']
})
export class DefectComponent implements OnInit {

  @Input() defectData: IDefect[] = []
  @Input() selectedDefect: IDefect = { uuid: '', x: -1, y: -1, severity: 0 }
  @Output() onClickDefect: EventEmitter<IDefect> = new EventEmitter()

  options: EChartsOption = {}

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    this.getScattorOption(this.defectData)
  }

  getScattorOption(defectData: IDefect[]) {

    let markPoint = this.selectedDefect.uuid == '' ? {} : {
      symbol: "arrow",
      symbolSize: 20,
      symbolRotate: 180,
      symbolOffset: [0, '-30%'],
      itemStyle: {
        borderColor: 'green',
        borderWidth: 3,
        color: 'lightgreen'
      },
      data: [
        {
          name: 'selectedDefect',
          coord: [this.selectedDefect.x, this.selectedDefect.y]
        }
      ]
    }

    this.options = {
      xAxis: {},
      yAxis: {},
      tooltip: {
        formatter: (point: any): string => {
          let x = point.name == "selectedDefect" ? this.selectedDefect.x : point.value[0]
          let y = point.name == "selectedDefect" ? this.selectedDefect.y : point.value[1]
          let severity = point.name == "selectedDefect" ? this.selectedDefect.severity : point.value[2]
          return '<b>X</b>: &nbsp;' + x + '<br>'
            + '<b>Y</b>: &nbsp;' + y + '<br>'
            + '<b>Severity</b>: &nbsp;' + severity;
        }
      },
      grid: {
        top: '3%',
        left: '5%',
        right: '5%',
        bottom: '10%',
      },
      visualMap: [
        {
          type: 'continuous',
          dimension: 2,
          orient: 'vertical',
          right: 0,
          top: '100%',
          min: 0,
          max: 100,
          text: ['HIGH', 'LOW'],
          calculable: true,
          inRange: {
            color: ['rgba(255, 0, 0, 0)', 'rgba(255,0,0,1)']
          }
        }
      ],
      series: [{
        symbolSize: 10,
        data: defectData.map(d => {
          return [d.x, d.y, d.severity]
        }),
        type: 'scatter',
        animation: false,
        markPoint: markPoint
      }]
    };

  }

  onChartClick(evt: any) {
    this.selectedDefect = (evt.name == "selectedDefect" || evt.dataIndex == this.selectedDefect.uuid) ? { uuid: '', x: -1, y: -1, severity: 0 } : this.defectData[evt.dataIndex]

    this.getScattorOption(this.defectData)
    this.onClickDefect.emit(this.selectedDefect)
  }

}
