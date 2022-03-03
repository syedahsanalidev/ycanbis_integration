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
import {SocialLinkedinService} from 'src/app/helper/http/social-linkedin/social-linkedin.service';


@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.scss']
})
export class LinkedinComponent implements OnInit {

  linkedinUrl: SafeResourceUrl = "";
  EmptylinkedinUrl = false;
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
  linkedinSubForm: FormGroup = new FormGroup({});
  userGroupSubForm: FormGroup = new FormGroup({});

  constructor(private modalService: BsModalService,
              private _activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private _titleService: Title,
              private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private SocialLinkedinService: SocialLinkedinService,
              private awsCognitoAuthenticatedUserService: AwsCognitoAuthenticatedUserService) { }

  social_name: any = null;
  showingFromTo: any = null;

  ngOnInit(): void {
    this._titleService.setTitle("Socail Subscription");
    this._activatedRoute.queryParams.subscribe(params => {
      if (params['social_name']) {
        this.social_name = params['social_name'];
      } else {
        this.social_name = this.socialNames.linkedin;
      }
      this.initTwitterSubForm();
      this.initAddGroupSubForm();
      this.getSocialFeed({});
      this.getMySubscriptionList();
    });
  }

  /**
   * Fetching social data
   */

  linkedinData: any = [];
  pageSize = 10;
  totalTweets = 0;
  currentPage = 1;
  async getSocialFeed(filter: any) {
    let accessToken = await this.awsCognitoAuthenticatedUserService.getAuthenticatedUserToken();
    this.SocialLinkedinService.getSocialSubData(filter, accessToken).subscribe(socialData => {

      let { linkedinData, pageSize, totalTweets } = socialData.body;

      this.pageSize = pageSize;
      let totalTweetsCount = !_.isEmpty(totalTweets) ? totalTweets[0] : { count: 0 };
      this.totalTweets = totalTweetsCount.count;
      this.linkedinData = !_.isEmpty(linkedinData) ? linkedinData : [];

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
    this.SocialLinkedinService.getMySubscriptionList(accessToken, filter).subscribe(
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
  socialName = SocialNames.linkedin;
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
    this.EmptylinkedinUrl = true;
    let basicUrl = "https://www.linkedin.com/embed/feed/update/urn:li:share:6904402263885115392/";
    // let basicUrl = `https://www.linkedin.com/in/abdur-rehman-6099a9128/`;
    this.linkedinUrl = this.sanitizer.bypassSecurityTrustResourceUrl(basicUrl);
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
      this.SocialLinkedinService.deleteSocialGroup(this.subscriptionGroup, accessToken).subscribe(deletedData => {
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
        social_name: this.subscription,
        group_name: this.currentGroupName
      }
      let accessToken = await this.awsCognitoAuthenticatedUserService.getAuthenticatedUserToken();
      this.SocialLinkedinService.deleteMySocialSubData(deleteObject, accessToken).subscribe(deletedData => {
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
   * Initializing linkedin subs group form
   */
  initTwitterSubForm() {
    this.linkedinSubForm = this.formBuilder.group({
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
    this.linkedinSubForm.patchValue({ "social_name": socialAccountName });
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
   * Submit linkedin form data
   */
  isSubFormSubmitted = false;
  errorMessage = null;
  async submitSubForm() {
    if (this.linkedinSubForm.valid && !this.isSubFormSubmitted) {
      this.isSubFormSubmitted = true;
      let subData = this.linkedinSubForm.value;
      let { group_name, ...datas } = subData;
      datas["group_name"] = group_name.group_name;
      datas["group_name_id"] = group_name._id;
      let accessToken = await this.awsCognitoAuthenticatedUserService.getAuthenticatedUserToken();
      this.SocialLinkedinService.addMySocialSubData(datas, accessToken).subscribe(
        (sub: any) => {
          this.isSubFormSubmitted = false;
          this.toastr.success('Success', `Added successfully !`);
          this.ngOnInit();
          this.socialConnectModalRef?.hide();
        }, (errors: any) => {
          let { message } = errors;
          this.isSubFormSubmitted = false;
          this.errorMessage = message;
          this.toastr.error('Error', `Something went wrong, Please try again !`);
        });
      this.linkedinSubForm.reset();
      // await this.getMySubscriptionList();
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
      this.SocialLinkedinService.addSocialGroup(subData, accessToken).subscribe(
        (sub: any) => {
          this.isUserSubsGroupFormSubmiteed = false;
          this.toastr.success('Success', `Added successfully !`);
          this.ngOnInit();
          this.userAddGroupSubsModalRef?.hide();
        }, (errors: any) => {
          let { message } = errors;
          this.isUserSubsGroupFormSubmiteed = false;
          this.userSubsGroupsErrorMessage = message;
          this.toastr.error('Error', `Something went wrong, Please try again !`);
        });
      this.userGroupSubForm.reset();
      // await this.getMySubscriptionList();
    }
  }


  /**
   * Add tweets to favorite
   */
  async addToFavorties(twitterId: any, screenName: any) {
    let accessToken = await this.awsCognitoAuthenticatedUserService.getAuthenticatedUserToken();
    this.SocialLinkedinService.addTofavorites({ twitterId, screenName }, accessToken).subscribe(savedfavorites => {
      this.SocialLinkedinService.getMySubscriptionList(accessToken, { socialName: this.socialName }).subscribe(
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
