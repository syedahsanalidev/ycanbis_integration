import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { faChartLine, faCogs, faKeyboard, faPlay, faSignOutAlt, faTachometerAlt, faUpload, faUser, faUserEdit, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  faUsers = faUsers;
  faTachometerAlt = faTachometerAlt;
  faChartLine = faChartLine;
  faSignOutAlt = faSignOutAlt;
  faUser = faUser;
  faCogs = faCogs;
  faUserEdit = faUserEdit;
  faUpload = faUpload;
  faKeyboard = faKeyboard;


  constructor(
    private _router: Router, private _titleService: Title) { }

  ngOnInit(): void {
    this._titleService.setTitle("My Account");
    //this.getLoggedInUser();
  }

  /**
   * Get Login user
   */
  userDetails: any = null;
  userAvatarText: any = null;
  getLoggedInUser() {
   
  }

  /**
   * Sign out from tool
   */
  signOut() {
   
  }
}
