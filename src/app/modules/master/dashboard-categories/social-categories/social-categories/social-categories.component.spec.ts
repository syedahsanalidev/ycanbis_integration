import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCategoriesComponent } from './social-categories.component';

describe('SocialCategoriesComponent', () => {
  let component: SocialCategoriesComponent;
  let fixture: ComponentFixture<SocialCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
