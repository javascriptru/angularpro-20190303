import { Component } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sw';

  contructor(swUpdate: SwUpdate, swPush: SwPush) {
    swUpdate.available.subscribe(_ => {

    });

    // swPush.requestSubscription();

  }
}
