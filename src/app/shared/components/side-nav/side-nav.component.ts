import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  faSignOutAlt,
  faCogs,
  faCog,
  faUser,
  faUsers,
  faBell,
  faUserEdit,
  faAddressBook,
  faCalendar,
  faArrowLeft,
  faArrowRight,
  faBars,
  faTimes,
  faTachometerAlt,
  faBinoculars,
  faUserCog,
  faCloudUploadAlt,
  faFileAlt,
  faClipboardList,
  faHandPointer,
  faHourglassHalf,
  faWalking,
  faCalendarDay,
  faFilePdf,
  faUserClock,
  faPowerOff,
  faBookReader,
  faUserCheck,
  faUserTie,
  faHome,
  faLayerGroup,
  faTty,
  faUserFriends,
  faHashtag,
  faNewspaper,
  faUserCircle,
  faUserPlus,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  toggleSideNav: boolean = false;
  @Output() toggleEvent = new EventEmitter();

  faSignOutAlt = faSignOutAlt;
  faCogs = faCogs;
  faCog = faCog;
  faUser = faUser;
  faUsers = faUsers;
  faHome = faHome;
  faLayerGroup = faLayerGroup;
  faTty = faTty;
  faHashtag = faHashtag;
  faNewspaper = faNewspaper;
  faBell = faBell;
  faUserCircle = faUserCircle;
  faUserPlus = faUserPlus;
  faHeadset = faHeadset;

  faUserEdit = faUserEdit;
  faAddressBook = faAddressBook;
  faCalendar = faCalendar;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faBars = faBars;
  faTimes = faTimes;
  faTachometerAlt = faTachometerAlt;
  faBinoculars = faBinoculars;
  faUserCog = faUserCog;
  faCloudUploadAlt = faCloudUploadAlt;
  faFileAlt = faFileAlt;
  faClipboardList = faClipboardList;
  faHandPointer = faHandPointer;
  faHourglassHalf = faHourglassHalf;
  faWalking = faWalking;
  faCalendarDay = faCalendarDay;
  faFilePdf = faFilePdf;
  faUserClock = faUserClock;
  faPowerOff = faPowerOff;
  faBookReader = faBookReader;
  faUserCheck = faUserCheck;
  faUserTie = faUserTie;

  nameKeyword: any = 'NA';
  loggedInUser: any;

  notificationCount = 0;
  notificationList = [];

  isAdmin = false;
  isManager = false;
  isHR = false;

  hideToggleMenuIcon: boolean = false;

  constructor() {}

  ngOnInit(): void {
    let slider = localStorage.getItem('toggleSideNav');
    if (!slider) {
      slider = 'false';
    }
    this.toggleSideNav = JSON.parse(slider);
  }

  togglenav() {
    this.toggleSideNav = !this.toggleSideNav;
    this.toggleEvent.emit(this.toggleSideNav);
    localStorage.setItem('toggleSideNav', this.toggleSideNav + '');
  }
}
