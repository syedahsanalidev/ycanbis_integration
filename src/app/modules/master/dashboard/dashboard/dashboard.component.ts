import { Component, OnInit } from '@angular/core';
import { SocialLink } from 'src/app/helper/enum/social-link/social-link';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  socialLink = SocialLink;

  constructor() { }

  ngOnInit(): void {
  }

}
