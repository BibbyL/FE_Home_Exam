import { Injectable } from '@angular/core';

const PANEL_WIDTH = 100
const PANEL_HEIGHT = 100
const NUM_OF_DEFECT = 200
const SEVERITY_MIN = 10
const SEVERITY_MAX = 100

@Injectable({
  providedIn: 'root'
})

export class MockDataService {

  constructor() { }

  public getDefectData(): IDefect[] {
    let defects: IDefect[] = [];
    [...Array(NUM_OF_DEFECT).keys()].forEach((_, i) => {
      defects.push({
        uuid: String(i),
        x: this.getRand(1, PANEL_HEIGHT),
        y: this.getRand(1, PANEL_WIDTH),
        severity: this.getRand(SEVERITY_MIN, SEVERITY_MAX, 2)
      })
    })
    return defects
  }

  private getRand(min: number, max: number, decimal: number = 0): number {
    return Number((min + Math.random() * (max - min)).toFixed(decimal))
  }

}

export interface IDefect {
  uuid: string,
  x: number,
  y: number,
  severity: number,
}