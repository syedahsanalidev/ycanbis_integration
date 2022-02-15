import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SafeResourceUrl, Title, DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {
  faBuilding,
  faChartLine,
  faCheck,
  faCircle,
  faCog,
  faComment,
  faEllipsisH,
  faPlus,
  faSave,
  faShapes,
  faTachometerAlt,
  faTh,
  faTimes,
  faTrash,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ToastrService} from 'ngx-toastr';
import {SocialNames} from 'src/app/helper/enum/social-names/social-names';
import {AwsCognitoAuthenticatedUserService} from 'src/app/helper/services/AwsCognitoAuthenticatedUser/aws-cognito-authenticated-user.service';
import * as _ from "lodash";
import {SocialFacebookService} from 'src/app/helper/http/social-facebook/social-facebook.service';


@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {

  facebookUrl: SafeResourceUrl = "";

  faTachometerAlt = faTachometerAlt;
  faShapes = faShapes;
  faBuilding = faBuilding;
  faCircle = faCircle;
  faTrash = faTrash;
  faSave = faSave;
  faTimes = faTimes;
  faTh = faTh;
  faChartLine = faChartLine;
  faPlus = faPlus;
  faCog = faCog;
  faEllipsisH = faEllipsisH;
  faCheck = faCheck;
  faUsers = faUsers;
  faComment = faComment;

  isTwitterCollapsed = false;

  public socialNames = SocialNames;
  customizeModalRef: BsModalRef | undefined;
  facebookSubForm: FormGroup = new FormGroup({});
  userGroupSubForm: FormGroup = new FormGroup({});

  constructor(private modalService: BsModalService,
              private _activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private _titleService: Title,
              private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private SocialFacebookService: SocialFacebookService,
              private awsCognitoAuthenticatedUserService: AwsCognitoAuthenticatedUserService) { }

  social_name: any = null;
  showingFromTo: any = null;

  ngOnInit(): void {
    this._titleService.setTitle("Socail Subscription");
    this._activatedRoute.queryParams.subscribe(params => {
      if (params['social_name']) {
        this.social_name = params['social_name'];
      } else {
        this.social_name = this.socialNames.facebook;
      }
      this.initTwitterSubForm();
      this.initAddGroupSubForm();
      this.getSocialFeed({});
      this.getMySubscriptionList();
    });
    let basicUrl = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2058218827670845";
    this.facebookUrl = this.sanitizer.bypassSecurityTrustResourceUrl(basicUrl);
  }

  /**
   * Fetching social data
   */

  facebookData: any = [];
  pageSize = 10;
  totalTweets = 0;
  currentPage = 1;
  async getSocialFeed(filter: any) {
    let accessToken = await this.awsCognitoAuthenticatedUserService.getAuthenticatedUserToken();
    this.SocialFacebookService.getSocialSubData(filter, accessToken).subscribe(socialData => {

      let { facebookData, pageSize, totalTweets } = socialData.body;

      this.pageSize = pageSize;
      let totalTweetsCount = !_.isEmpty(totalTweets) ? totalTweets[0] : { count: 0 };
      this.totalTweets = totalTweetsCount.count;
      this.facebookData = !_.isEmpty(facebookData) ? facebookData : [];

      this.showingFromTo = this.showingPageFromToCalucation(this.totalTweets, pageSize, this.currentPage);
    })
  }

  /**
   * Get my social subs
   */
  mySubscriptionList: any = [];
  myGroup: any = [];
  myFavGroup: any = null;
  async getMySubscriptionList() {
    this.mySubscriptionList = [];
    let accessToken = await this.awsCognitoAuthenticatedUserService.getAuthenticatedUserToken();
    let filter = { socialName: this.social_name }
    this.SocialFacebookService.getMySubscriptionList(accessToken, filter).subscribe(
      mySubscriptionData => {

        let mySubscriptionList = mySubscriptionData.body;
        this.mySubscriptionList = mySubscriptionList ? mySubscriptionList.mySubList : [];
        this.myGroup = !_.isEmpty(mySubscriptionList) && !_.isEmpty(mySubscriptionList.group) ? mySubscriptionList.group : [];
        this.myFavGroup = mySubscriptionList ? mySubscriptionList.myFavGroup : [];
      }, error => {
        console.log(error);
      })
  }


  /**
   * On social tab select fetch my sub data
   * @param $event
   * @param socialName
   */
  socialName = SocialNames.facebook;
  onSocialTabSelect($event: any, socialName: any) {
    this.socialName = socialName;
  }

  /**
   * Fetch data for social name
   * @param social_unique_identification
   * @param social_name
   */
  social_unique_identification = null;
  fetchDataForScreenName(social_unique_identification: any, social_name: any) {
    this.social_unique_identification = social_unique_identification;
    let queryObject = { screen_name: social_unique_identification, pageNumber: 1 };
    this.getSocialFeed(queryObject);
  }

  /**
   * On page change event
   * @param $event
   */

  pageChanged($event: any) {
    let { page } = $event;
    this.currentPage = page;
    let queryObject: any = { pageNumber: page };
    if (this.social_unique_identification) {
      queryObject["screen_name"] = this.social_unique_identification;
    }
    this.getSocialFeed(queryObject);
  }

  /**
   * This is use to caludate the page
   */
  showingPageFromToCalucation(totalResult: number, perPage: number, currentPage: number) {
    let totalPages = Math.ceil(totalResult / perPage);
    if (totalResult == 0) {
      return this.pageShowingFromAndTo(totalResult, totalResult);
    }
    if (currentPage == 1) {
      if (totalResult < perPage) {
        return this.pageShowingFromAndTo(currentPage, totalResult);
      } else {
        return this.pageShowingFromAndTo(currentPage, perPage);
      }
    } else {
      let currentPaginationCount = perPage * currentPage;
      if (totalResult >= currentPaginationCount) {
        return this.pageShowingFromAndTo(
          perPage * (currentPage - 1) + 1,
          perPage * currentPage
        );
      } else if (totalPages == currentPage) {
        return this.pageShowingFromAndTo(
          perPage * (currentPage - 1) + 1,
          totalResult
        );
      }
    }

    return this.pageShowingFromAndTo(0, 0);
  }
  /**
   * This is use to return the from and to pagination object for the data
   */
  pageShowingFromAndTo(showingFrom: number, showingTo: number) {
    let showing: any = {};
    showing["showingFrom"] = showingFrom;
    showing["showingTo"] = showingTo;
    return showing;
  }


  /**
   * User can delete a subscriptin or group
   * @param screenName
   * @param type - group or single subscription
   */

  groupDeleteConfimationModalRef: BsModalRef | undefined;
  subscriptionGroup = null;
  currentIndexForDelete: any = null;
  deleteGroupSocialSubs(subscription: any, groupDeleteConfimationModal: TemplateRef<any>, currentIndexForDelete: number) {
    this.subscriptionGroup = subscription;
    this.currentIndexForDelete = currentIndexForDelete;
    this.groupDeleteConfimationModalRef = this.modalService.show(groupDeleteConfimationModal, Object.assign({}, { class: 'modal-md modal-dialog-centered' }));
  }

  /**
   * Confirmating delete group
   */
  async confirmToDeleteGroup() {
    if (this.subscriptionGroup) {
      let accessToken = await this.awsCognitoAuthenticatedUserService.getAuthenticatedUserToken();
      this.SocialFacebookService.deleteSocialGroup(this.subscriptionGroup, accessToken).subscribe(deletedData => {
        this.groupDeleteConfimationModalRef?.hide();
        this.toastr.success('Group & Subscription Deleted', 'Success');
        this.myGroup.splice(this.currentIndexForDelete, 1);
      }, error => {
        this.groupDeleteConfimationModalRef?.hide();
        this.toastr.error('Something went wrong, Please try again !', 'Error !');
      })
    }
  }


  /**
   * User can delete a subscriptin
   * @param screenName
   * @param type - group or single subscription
   */

  subDeleteConfimationModalRef: BsModalRef | undefined;
  subscription = null;
  currentGroupName = null;
  currentSubIndexForDelete: any = null;
  deleteSocialSubs(subscription: any, subDeleteConfimationModalRef: TemplateRef<any>, currentIndexForDelete: number, currentGroupName: any) {
    this.subscription = subscription;
    this.currentSubIndexForDelete = currentIndexForDelete;
    this.currentGroupName = currentGroupName;
    this.subDeleteConfimationModalRef = this.modalService.show(subDeleteConfimationModalRef, Object.assign({}, { class: 'modal-md modal-dialog-centered' }));
  }

  /**
   * Confirmating delete subscription
   */
  async confirmToDeleteSub() {
    if (this.subscription) {
      let deleteObject = {
        screen_name: this.subscription,
        group_name: this.currentGroupName
      }
      let accessToken = await this.awsCognitoAuthenticatedUserService.getAuthenticatedUserToken();
      this.SocialFacebookService.deleteMySocialSubData(deleteObject, accessToken).subscribe(deletedData => {
        this.subDeleteConfimationModalRef?.hide();
        this.toastr.success('Subscription Deleted', 'Success');
        this.myGroup.splice(this.currentIndexForDelete, 1);
      }, error => {
        this.subDeleteConfimationModalRef?.hide();
        this.toastr.error('Something went wrong, Please try again !', 'Error !');
      })
    }
  }
  /**
   * Initializing facebook subs group form
   */
  initTwitterSubForm() {
    this.facebookSubForm = this.formBuilder.group({
      social_unique_identification: ['', [Validators.required]],
      social_name: ['', [Validators.required]],
      group_name: [[], [Validators.required]]
    });
  }


  /**
   * Initializing user group  form
   */
  initAddGroupSubForm() {
    this.userGroupSubForm = this.formBuilder.group({
      group_name: ['', [Validators.required]],
      social_name: ['', [Validators.required]]
    });
  }


  /**
   * Open customize modal
   * @param template
   */
  openCustomizeModal(template: TemplateRef<any>) {
    this.customizeModalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-lg modal-dialog-centered' }));
  }


  /**
   * Open customize modal
   * @param template
   */

  socialConnectModalRef: BsModalRef | undefined;
  socialAccountName = null;
  openSocialConnect(template: TemplateRef<any>, socialAccountName: any) {
    this.socialAccountName = socialAccountName;
    this.facebookSubForm.patchValue({ "social_name": socialAccountName });
    this.socialConnectModalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-md modal-dialog-centered' }));
  }


  /**
   * Open customize modal
   * @param template
   */

  userAddGroupSubsModalRef: BsModalRef | undefined;
  userGroupAccountName = null;
  openAddUserSubsGroupModal(template: TemplateRef<any>, userGroupAccountName: any) {
    this.userGroupAccountName = userGroupAccountName;
    this.userGroupSubForm.patchValue({ "social_name": userGroupAccountName });
    this.userAddGroupSubsModalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-md modal-dialog-centered' }));
  }

  /**
   * Submit facebook form data
   */
  isSubFormSubmitted = false;
  errorMessage = null;
  async submitSubForm() {
    if (this.facebookSubForm.valid && !this.isSubFormSubmitted) {
      this.isSubFormSubmitted = true;
      let subData = this.facebookSubForm.value;
      let { group_name, ...datas } = subData;
      datas["group_name"] = group_name.group_name;
      datas["group_name_id"] = group_name._id;
      let accessToken = await this.awsCognitoAuthenticatedUserService.getAuthenticatedUserToken();
      this.SocialFacebookService.addMySocialSubData(datas, accessToken).subscribe(
        (sub: any) => {
          this.isSubFormSubmitted = false;
          this.toastr.success('Success', `Added successfully !`);
          this.socialConnectModalRef?.hide();
        }, (errors: any) => {
          let { message } = errors;
          this.isSubFormSubmitted = false;
          this.errorMessage = message;
          this.toastr.error('Error', `Something went wrong, Please try again !`);
        })
    }
  }


  /**
   * Submit user subs group
   */
  isUserSubsGroupFormSubmiteed = false;
  userSubsGroupsErrorMessage = null;
  async submitAddUserSubsGroupForm() {
    if (this.userGroupSubForm.valid && !this.isUserSubsGroupFormSubmiteed) {
      this.isUserSubsGroupFormSubmiteed = true;
      let subData = this.userGroupSubForm.value;
      let accessToken = await this.awsCognitoAuthenticatedUserService.getAuthenticatedUserToken();
      this.SocialFacebookService.addSocialGroup(subData, accessToken).subscribe(
        (sub: any) => {
          this.isUserSubsGroupFormSubmiteed = false;
          this.toastr.success('Success', `Added successfully !`);
          this.userAddGroupSubsModalRef?.hide();
        }, (errors: any) => {
          let { message } = errors;
          this.isUserSubsGroupFormSubmiteed = false;
          this.userSubsGroupsErrorMessage = message;
          this.toastr.error('Error', `Something went wrong, Please try again !`);
        })
    }
  }


  /**
   * Add tweets to favorite
   */
  async addToFavorties(twitterId: any, screenName: any) {
    let accessToken = await this.awsCognitoAuthenticatedUserService.getAuthenticatedUserToken();
    this.SocialFacebookService.addTofavorites({ twitterId, screenName }, accessToken).subscribe(savedfavorites => {
      this.SocialFacebookService.getMySubscriptionList(accessToken, { socialName: this.socialName }).subscribe(
        mySubscriptionList => {
          let mySubList = mySubscriptionList.body
          this.myFavGroup = mySubList ? mySubList.myFavGroup : null;
        })
      this.toastr.success('Success', `Added successfully !`);
    }, error => {
      this.toastr.error('Error', `Something went wrong, Please try again !`);
    });
  }


  /**
   * Twitter account setting add and edit
   * @param $event
   */
  editUserSubsGroupModalRef: BsModalRef | undefined;
  tweetsAccountSettings($event: any, editUserSubsGroupModal: TemplateRef<any>) {
    $event.stopPropagation();
    let config = {
      animated: false
    };
    this.editUserSubsGroupModalRef = this.modalService.show(editUserSubsGroupModal, Object.assign({ ...config }, { class: 'modal-xl modal-margin-zero modal-dialog-centered' }));
  }

}
