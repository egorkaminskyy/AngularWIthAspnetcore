import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
@Component({
    selector: 'app-server',
    templateUrl: './server/server.component.html',
    styleUrls: ['./server/server.component.css']
})
export class ServerComponent implements OnInit {
    constructor(private _httpService: Http) { }
    apiValues: string[] = [];
    ngOnInit() {
        this._httpService.get('/api/else').subscribe(values => {
            this.apiValues = values.json() as string[];
        });
    }
}