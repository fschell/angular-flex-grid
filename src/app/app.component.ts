import {AfterViewInit, Component, QueryList, ViewChild, ViewChildren} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./_app.component.scss']
})
export class AppComponent implements AfterViewInit {

    @ViewChild('grid1') grid1;
    @ViewChildren('items') aItems;
    lastItemRect;
    Math = Math;
    random = 0;
    items = [
        ['1/1', '2/1', '3/1'],
        ['2/1', '2/2', '2/3'],
        ['1/1', '2/1', '2/2', '3/2', '5/1'],
        ['1/1', '1/2', '2/1', '2/2', '3/1', '3/2'],
        ['1/1', '1/2', '1/3', '2/1', '2/2', '2/3', '3/1', '3/2', '3/3']
    ];

    constructor() {
        setInterval(() => {

            // change items
            this.random =
                Math.floor(Math.random() * this.items.length);

            // give a tick to allow repositioning, then get pos of last item
            setTimeout( () =>
                this.lastItemRect = this.aItems.last.nativeElement.getBoundingClientRect(),
            0);

        }, 2000);
    }

    ngAfterViewInit() {
        console.log(this.grid1.nativeElement.getBoundingClientRect());
        console.log(this.aItems);

    }
}
