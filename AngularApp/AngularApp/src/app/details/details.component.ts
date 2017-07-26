import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    R1: string = "V1";
    New: string = "App";
    constructor(private _httpService: Http) { }
    apiValues: SomeClass = new SomeClass ;
    ngOnInit() {
        this._httpService.post('/api/values/get', '').subscribe(values => {
            this.apiValues = values.json();
        });
    }
}
class SomeClass {
    appName: string = "AngApp";
    description: string = "MyApp";
    appUrl: string = "localHost:5000";
    name:string = "hello";
    pas:string = "world";
}