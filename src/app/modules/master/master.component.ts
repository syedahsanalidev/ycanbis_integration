import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  isShowHeader: boolean = true;
  sideNavSlide: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.getLoggedInUser();
    let slider = localStorage.getItem('toggleSideNav')
    if (!slider) {
      slider = "false";
    }
    this.sideNavSlide = JSON.parse(slider);
  }

  /**
   * Get loggedin user
   */
  isLoggedInUser = false;
  loggedInUser: any = null;
  getLoggedInUser() {

    this.isLoggedInUser = true;
    this.loggedInUser = { fullName: 'vishwash' };

  }

  homeSlide(togglenav: boolean) {
    this.sideNavSlide = togglenav;
  }

}
