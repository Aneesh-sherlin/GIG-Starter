import { Component } from '@angular/core';
import { NavigationStart, Router, Event } from '@angular/router';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gigstarter';
  loading: boolean;

  constructor(public router: Router, public common: CommonService) {

    // this.loading = true;
    // setTimeout(() => { this.loading = false; }, 3000);

    //   // if(/Android 4\.[0-3]/.test(navigator.appVersion)){
    //     window.addEventListener("resize", function(){
    //        if(document.activeElement.tagName=="INPUT"){
    //           window.setTimeout(function(){
    //              document.activeElement.scrollIntoView();
    //           },0);
    //        }
    //     })
    // //  }
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.common.homeScroll(0)
      }
    });
  }
}
