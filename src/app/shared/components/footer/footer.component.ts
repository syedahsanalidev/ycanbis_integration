import { Component, OnInit } from '@angular/core';
import { SocialLink } from 'src/app/helper/enum/social-link/social-link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socialLink = SocialLink;
  isLogedInUser: any = true;

  constructor() { }
  
  ngOnInit(): void {
  }
}
