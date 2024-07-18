import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DatatableComponent } from './datatable/datatable.component';
import { AgGridAngular } from 'ag-grid-angular';
import { CustomRendererComponent } from './custom-renderer/custom-renderer.component';
import { CellRendererComponent } from 'ag-grid-community/dist/types/core/components/framework/componentTypes';
import { CustomRendererEditDeleteComponent } from './custom-renderer-edit-delete/custom-renderer-edit-delete.component';



@NgModule({
  declarations: [
    CardComponent,
    DatatableComponent,
    CustomRendererComponent,
    CustomRendererEditDeleteComponent
  ],
  imports: [
    CommonModule,
    AgGridAngular
  ],
  exports:[
    CardComponent,
    DatatableComponent,
    CustomRendererComponent,
    CustomRendererEditDeleteComponent
  ]
})
export class SharedModule { }
