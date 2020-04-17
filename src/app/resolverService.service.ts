import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap, catchError} from 'rxjs/operators';

@Injectable({
   providedIn: 'root'
})
export class SomethingResolverService implements Resolve<any> {
   constructor() { }
   resolve() {
       return
   }    
 }