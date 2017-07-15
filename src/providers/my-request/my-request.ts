import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MyRequestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MyRequestProvider {

  constructor(public http: Http) {
    console.log('Hello MyRequestProvider Provider');
  }
getRemoteData()
{
  this.http.get('https://dhoondlee.com/ion.html').map(res=>res.json()).subscribe(data=>{
console.log(data);
  });
}
}
 