import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { TableComponent } from './table/table.component';
import { DefectComponent } from './defect/defect.component';
import { ControllerComponent } from './controller/controller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DefectComponent,
    ControllerComponent,
  ],
  imports: [
    FormsModule,
    NzGridModule,
    BrowserModule,
    NzButtonModule,
    NzSliderModule,
    NzTableModule,
    NzListModule,
    NzCardModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
