import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DatatableComponent } from './datatable/datatable.component';
import { AgGridAngular } from 'ag-grid-angular';
import { CustomRendererComponent } from './custom-renderer/custom-renderer.component';
import { CellRendererComponent } from 'ag-grid-community/dist/types/core/components/framework/componentTypes';



@NgModule({
  declarations: [
    CardComponent,
    DatatableComponent,
    CustomRendererComponent
  ],
  imports: [
    CommonModule,
    AgGridAngular
  ],
  exports:[
    CardComponent,
    DatatableComponent,
    CustomRendererComponent
  ]
})
export class SharedModule { }
