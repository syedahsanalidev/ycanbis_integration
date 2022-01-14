import { Component, ElementRef, HostListener, Input, OnInit, EventEmitter } from '@angular/core';
import { input } from '@aws-amplify/ui';
import { faCaretDown, faPager, faSignOutAlt, faTachometerAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { SocialLink } from 'src/app/helper/enum/social-link/social-link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('sideNavSlide') sideNavSlide!: boolean;

  isLogedInUser: any = true;
  faCaretDown = faCaretDown;
  faUserCircle = faUserCircle;
  faSignOutAlt = faSignOutAlt;
  faTachometerAlt = faTachometerAlt;
  socialLink = SocialLink;

  constructor(private elRef:ElementRef) { }

  ngOnInit(): void {
    this.eventOnLoad();
    let slider = localStorage.getItem('toggleSideNav')
    if (!slider) {
      slider = "false";
    }
    this.sideNavSlide = JSON.parse(slider);
  }

  isHideAtSmall = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    let sm = event.target.innerWidth;
    if (sm <= 768) {
      this.isHideAtSmall = true;
    } else {
      this.isHideAtSmall = false;
    }
  }

  showAndHideMenu(){
    this.isHideAtSmall= !this.isHideAtSmall;
  }

  eventOnLoad(){
    if (window.innerWidth > 768) {
      this.isHideAtSmall = false;
    } else {
      this.isHideAtSmall = true;
    }
  }

  /**
   * 
   * On dropdown open or close event
   * @param $event 
   */

  onOpenChange($event : any){
    console.log($event)
    console.log(this.elRef.nativeElement.querySelector("body"))
  }

  homeSlide(togglenav: boolean) {
    this.sideNavSlide = togglenav;
    console.log(this.sideNavSlide);
    
  }
}
