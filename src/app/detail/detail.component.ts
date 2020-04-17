import { Component, OnInit } from '@angular/core';
import { DataService } from "../dataSharing.service";
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  listItemData =  {
    "heading": null,
    "detail": null
  }

  constructor(private _dataService: DataService, private router:Router, private activatedRoute:ActivatedRoute) { 
    console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit(): void {
    console.log(history.state);
    this.listItemData = history.state;
  }

  backToHomePage(): void{
    this.router.navigate(['/list'])
  }

}
