import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { InstagramService } from '../instagram.service';
import { Brand } from '../models';

@Component({
  selector: 'app-facebook',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {

  brands: Brand[] = [
    { name: 'PostById', url: 'https://www.instagram.com/p/CUvI4cGDDcq/' },
    { name: 'MettleSol', url: 'https://www.instagram.com/p/CSrGMZXIw1f/' },

  ];

  selectedBrand: Brand | undefined = undefined;

  @ViewChild('embeddedContentContainer') embeddedContentContainer: ElementRef<HTMLDivElement> | undefined = undefined;

  constructor(private facebookService: InstagramService) {}

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

      // @ts-ignore
      if ( typeof window['instgrm'] !== 'undefined' ) {
        // @ts-ignore
        window['instgrm'].Embeds.process();
      }

      this.facebookService.renderBrandPage(container);
    }
  }
}
