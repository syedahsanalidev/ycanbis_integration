import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faTachometerAlt, faShapes, faBuilding, faCircle, faSave, faTimes, faTh, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { SocialNames } from 'src/app/helper/enum/social-names/social-names';
import { MyAccountService } from 'src/app/helper/http/my-account/my-account.service';

@Component({
  selector: 'app-social-categories',
  templateUrl: './social-categories.component.html',
  styleUrls: ['./social-categories.component.scss']
})
export class SocialCategoriesComponent implements OnInit {

  faTachometerAlt = faTachometerAlt;
  faShapes = faShapes;
  faBuilding = faBuilding;
  faCircle = faCircle;
  faSave = faSave;
  faTimes = faTimes;
  faTh = faTh;
  faChartLine = faChartLine;

  isTwitterCollapsed = false;

  public socialNames = SocialNames;

  constructor(private titleService: Title, private myAccountService: MyAccountService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Social");
    //this.getMyTotalCountForSocial();
  }

  totalNumberOfFavorates = 0;
  totalNumberOfMyEngagement = 0;
  totalNumberOfMyUpdates = 0;

  /**
   * Get Social feeds count
   */
  getMyTotalCountForSocial() {
    this.myAccountService.getMySocialCount({}).subscribe((myFav: any) => {
      this.totalNumberOfFavorates = myFav ? myFav.myfevCount : 0;
    })
  }

}
