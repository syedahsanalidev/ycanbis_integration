import { Component, OnInit, ElementRef, ViewChild,
  // ChangeDetectorRef
} from '@angular/core';
import { FacebookService } from '../facebook.service';
import { Brand } from '../models';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {

  brands: Brand[] = [
    { name: 'MettleSol', url: 'https://www.facebook.com/mettlesolution/' },
    { name: 'Ycanbis', url: 'https://www.facebook.com/Ycanbis/' },
    { name: 'Facebook', url: 'https://www.facebook.com/facebook/' },
  ];


  // facebook = "https://www.facebook.com/mettlesolution/";
  //
  //
  // handleChangeFb() {
  //   this.facebook = "https://www.facebook.com/Ycanbis/";
  //   this.cdr.detectChanges();
  //
  //   const container = document.getElementById('fb-container');
  //   if (container) {
  //     alert("here");
  //     container.innerHTML = `<a class="fb-page" href="${this.facebook}"
  //                data-tabs="timeline" data-width="" data-height="" data-small-header="false"
  //                data-adapt-container-width="true"
  //                data-hide-cover="false" data-show-facepile="true">
  //             <blockquote class="fb-xfbml-parse-ignore">
  //               <a href="${this.facebook}">Mettlesol</a>
  //             </blockquote>
  //           </a>`;
  //   }
  // }

  selectedBrand: Brand | undefined = undefined;

  @ViewChild('embeddedContentContainer') embeddedContentContainer: ElementRef<HTMLDivElement> | undefined = undefined;

  constructor(
    private facebookService: FacebookService,
    // private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
  }

  selectBrand(brand: Brand) {
    if (brand === this.selectedBrand) {
      this.selectedBrand = undefined;
      return;
    }

    this.selectedBrand = brand;

    // [class.visible] should apply first
    // to update height/width of the container
    setTimeout(() => this.getBrandPage());
  }

  private async getBrandPage() {
    if (!this.embeddedContentContainer || !this.selectedBrand) {
      return;
    }

    const { clientHeight, clientWidth } = this.embeddedContentContainer.nativeElement;

    const response = await this.facebookService.getBrandPage(this.selectedBrand.url, clientHeight, clientWidth);
    const innerHTML = response && !response.error ? response.html : response.error?.message || '';

    if (this.embeddedContentContainer) {
      const container = this.embeddedContentContainer.nativeElement as HTMLDivElement;
      container.innerHTML = innerHTML;

      this.facebookService.renderBrandPage(container);
    }
  }
}
