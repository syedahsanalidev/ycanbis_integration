import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TableService } from './ManageUserTable.service';

import { ManageUserTableComponent } from './ManageUserTable.component';

describe('ManageUserTableComponent', () => {
  let component: ManageUserTableComponent;
  let fixture: ComponentFixture<ManageUserTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserTableComponent ],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule],
      providers: [TableService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
