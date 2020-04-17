import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from "../dataSharing.service";

@Component({
  selector: 'app-custom-setting',
  templateUrl: './custom-setting.component.html',
  styleUrls: ['./custom-setting.component.scss']
})
export class CustomSettingComponent implements OnInit {
  toggleFlag: boolean = true;
  app_CustomValue = {
    _width: '300px',
    _height: '190px',
    _margin: '10px'
  };
  _customSetting: FormGroup;
  

  constructor(private _formbuilder: FormBuilder, private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.displayButton.subscribe((data)=>{
      this.toggleFlag=data;
    });

    if(localStorage.all_tiles_data){
      this.app_CustomValue = JSON.parse(localStorage.all_tiles_data);
    }

    this._customSetting =  this._formbuilder.group({
      _width: [this.app_CustomValue._width, Validators.required],
      _height: [this.app_CustomValue._height, Validators.required],
      _margin: [this.app_CustomValue._margin, Validators.required],
    });
  }

  get formData() { return this._customSetting.controls}

  

  storeLocally(): void{
    if(this._customSetting.invalid) return;
    let simplifiedData = {
      "_height": this.formData._height.value,
      "_width": this.formData._width.value,
      "_margin": this.formData._margin.value 
    };
    localStorage.all_tiles_data = JSON.stringify(simplifiedData);
  }

  updateDirectally(): void{
    if(this._customSetting.invalid) return;
    let simplifiedData = {
      "_height": this.formData._height.value,
      "_width": this.formData._width.value,
      "_margin": this.formData._margin.value 
    };
    this._dataService.ShareData(simplifiedData);
  }

}
