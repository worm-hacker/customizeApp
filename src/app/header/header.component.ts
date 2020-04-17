import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from "../dataSharing.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private toggleFlag: boolean = true;
  

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.ButtonDisplay(this.toggleFlag)
  }

  editListItem(): void {
    this.toggleFlag = !this.toggleFlag;
    this._dataService.ButtonDisplay(this.toggleFlag)
  }

}
