import {Injectable, EventEmitter} from '@angular/core';
import {BehaviorSubject, observable} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    displayButton = new EventEmitter();
    button:boolean;
    dataTransfer = new EventEmitter();
    sharedData:any;

    constructor() { }

    ButtonDisplay(button:boolean){
        this.button=button;
        this.displayButton.emit(this.button);
    }

    ShareData(sharedData:any){
        this.sharedData=sharedData;
        this.dataTransfer.emit(this.sharedData);
    }
}