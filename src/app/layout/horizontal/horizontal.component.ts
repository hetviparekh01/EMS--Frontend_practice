import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss']
})
export class HorizontalComponent implements OnInit {
  role!:string;
  constructor(private localstorageService:LocalstorageService){}
  ngOnInit(): void {
    this.role=this.localstorageService.getRole() as string
  }
  
  
}
