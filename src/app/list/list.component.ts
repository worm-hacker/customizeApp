import { Component, OnInit } from '@angular/core';
import { DataService } from "../dataSharing.service";
import { MatDialog } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { ModalComponent } from './../modal/modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listArrayItem = [
    {
      "title": "Title 1",
      "itemNo": "1",
      "heading": "heading-1",
      "info": "This is Information-1",
      "detail": "Detail About-1"
    },{
      "title": "Title 2",
      "itemNo": "2",
      "heading": "heading-2",
      "info": "This is Information-2",
      "detail": "Detail About-2"
    },{
      "title": "Title 3",
      "itemNo": "3",
      "heading": "heading-3",
      "info": "This is Information-3",
      "detail": "Detail About-3"
    },{
      "title": "Title 4",
      "itemNo": "4",
      "heading": "heading-4",
      "info": "This is Information-4",
      "detail": "Detail About-4"
    },{
      "title": "Title 5",
      "itemNo": "5",
      "heading": "heading-5",
      "info": "This is Information-5",
      "detail": "Detail About-5"
    },{
      "title": "Title 6", 
      "itemNo": "6",
      "heading": "heading-6",
      "info": "This is Information-6",
      "detail": "Detail About-6"
    },{
      "title": "Title 7",
      "itemNo": "7",
      "heading": "heading-7",
      "info": "This is Information-7",
      "detail": "Detail About-7"
    },{
      "title": "Title 8",
      "itemNo": "8",
      "heading": "heading-8",
      "info": "This is Information-8",
      "detail": "Detail About-8"
    },{
      "title": "Title 9",
      "itemNo": "9",
      "heading": "heading-9",
      "info": "This is Information-9",
      "detail": "Detail About-9"
    },{
      "title": "Title 10",
      "itemNo": "10",
      "heading": "heading-10",
      "info": "This is Information-10",
      "detail": "Detail About-10"
    },{
      "title": "Title 11",
      "itemNo": "11",
      "heading": "heading-11",
      "info": "This is Information-11",
      "detail": "Detail About-11"
    },{
      "title": "Title 12",
      "itemNo": "12",
      "heading": "heading-12",
      "info": "This is Information-12",
      "detail": "Detail About-12"
    }
  ];
  tilesDetails = {
    _height: "190px",
    _margin: "10px",
    _width: "300px"
  };
  singleClickFlags = [];


  constructor(private _dataService: DataService, private matDialog: MatDialog, private router: Router ) { }

  ngOnInit(): void {
    this._dataService.dataTransfer.subscribe((data)=>{
      this.tilesDetails = data;
    });

    if(localStorage.all_tiles_data){
      this.tilesDetails = JSON.parse(localStorage.all_tiles_data);
    } 

    if(localStorage.all_star_rate){
      this.singleClickFlags = JSON.parse(localStorage.all_star_rate);
    }else{
      for(let key in this.listArrayItem){
        this.singleClickFlags.push(0);
      }
    }

  }

  singleClickStar(index): void {
    this.singleClickFlags[index] = 1;
    localStorage.all_star_rate = JSON.stringify(this.singleClickFlags);
  }

  doubleClickStar(index): void {
    this.singleClickFlags[index] = 2;
    localStorage.all_star_rate = JSON.stringify(this.singleClickFlags);
  }

  openModal(item): void {
    const dialogRef = this.matDialog.open(ModalComponent, {
      data: {item}
    });
  }

  openDetailRoute(index): void{
    let newObj = {
      'heading': this.listArrayItem[index].heading,
      'detail': this.listArrayItem[index].detail
    };

    this.router.navigateByUrl('/detail', { state: newObj});
  }
  
}
