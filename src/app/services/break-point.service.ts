import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class BreakPointService {
  screenSize: String = 'large';
  SMALL = 'small';
  MEDIUM = 'medium';
  LARGE = 'large';
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      // tslint:disable-next-line:max-line-length
      .observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape, Breakpoints.Handset, Breakpoints.Small, Breakpoints.TabletPortrait])
      .subscribe(result => {
        if (result.matches) {
          this.activateSmallLayout();
        } else {
          this.activateLargeLayout();
        }
      });
  }

  activateSmallLayout() {
    this.screenSize = this.SMALL;
  }

  activateMediumLayout() {
    this.screenSize = this.MEDIUM;
  }

  activateLargeLayout() {
    this.screenSize = this.LARGE;
  }
}
