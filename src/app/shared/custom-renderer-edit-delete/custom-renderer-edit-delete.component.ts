import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-custom-renderer-edit-delete',
  templateUrl: './custom-renderer-edit-delete.component.html',
  styleUrls: ['./custom-renderer-edit-delete.component.scss']
})
export class CustomRendererEditDeleteComponent implements ICellRendererAngularComp {

  params:any
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params=params
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true
  }
  editBtn() {
    this.params.editBtn(this.params.data._id)
  }
  deleteBtn(){
    this.params.deleteBtn(this.params.data._id)
  }

}
