import { Component, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import * as tableData from './data';
import { TableService } from './ManageUserTable.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Table } from './ManageUserTable';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { 'asc': 'desc', 'desc': '', '': 'asc' };
export const compare = (v1: any, v2: any) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: string | any;
  direction: SortDirection | any;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})


export class NgbdSortableHeader {

  @Input() sortable: string | any;
  @Input() direction: SortDirection | any = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}

@Component({
  selector: 'app-manageusertable',
  templateUrl: './ManageUserTable.component.html',
  styleUrls: ['./ManageUserTable.scss']
})
export class ManageUserTableComponent implements OnInit {

  clientList = this.tableService.getTable();
  sortClientList;
  filterClient;
  cfilterClient;
  page = 1;
  pageSize = 2;
  editClient: FormGroup | any;
  editAddLabel: string | any = 'Edit';
  clientDetail: Table | any = null;


  //Sorting purpose...
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;





  constructor(private tableService: TableService, private fb: FormBuilder, private modalService: NgbModal) {
    this.filterClient = this.clientList;
    this.cfilterClient = this.clientList;
    this.sortClientList = this.clientList;
  }

  ngOnInit() {
    this.editClient = this.fb.group({
      fullName: ['', Validators.required],
      UserName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
    })
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach((header: any) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting client

    if (direction === '') {
      this.sortClientList = this.tableService.getTable();
      this.cfilterClient = this.tableService.getTable();
    } else {
      this.sortClientList = [...this.tableService.getTable()].sort((a: any, b: any) => {
        const res: any = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
      this.cfilterClient = [...this.tableService.getTable()].sort((a: any, b: any) => {
        const res: any = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }


  //Searching..........
  _searchTerm: string | any;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(val: string) {
    this._searchTerm = val;
    this.filterClient = this.filter(val);
  }

  filter(v: string) {
    return this.tableService.getTable().filter(x => x.Name.toLowerCase().indexOf(v.toLowerCase()) !== -1 ||
      x.UserName.toLowerCase().indexOf(v.toLowerCase()) !== -1 || x.Email.toLowerCase().indexOf(v.toLowerCase()) !== -1);
  }




  //complete example................
  cpage: number = 1;
  cpageSize: number = 4;

  _csearchTerm: string | any;
  get csearchTerm(): string {
    return this._csearchTerm;
  }
  set csearchTerm(val: string) {
    this._csearchTerm = val;
    this.cfilterClient = this.cfilter(val);
  }

  cfilter(v: string) {
    return this.tableService.getTable().filter(x => x.Name.toLowerCase().indexOf(v.toLowerCase()) !== -1 ||
      x.UserName.toLowerCase().indexOf(v.toLowerCase()) !== -1 || x.Email.toLowerCase().indexOf(v.toLowerCase()) !== -1);
  }


  //Model........................
  logValidationErrors(group: FormGroup) {
    Object.keys(group.controls).forEach((key: string) => {
      const ac = group.get(key);

      this.formsErrors[key] = '';
      if (ac && !ac.valid && (ac.touched || ac.dirty)) {
        const message: any = this.ValidationMessage[key];
        for (const errorKey in ac.errors) {
          if (errorKey) {
            this.formsErrors[key] += message[errorKey] + '    ';
          }
        }
      }
      if (ac instanceof FormGroup) {
        this.logValidationErrors(ac)
      }
    })
  }

  ValidationMessage: any = {
    fullName: { required: 'full Name is required.' },
    UserName: { required: 'User Name is required.' },
    email: {
      required: 'Email is required.',
      Email: 'Not a email'
    },
  }

  formsErrors: any = {
  }


  openModal(targetModal: any, client: any) {

    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });

    if (client == null) {
      this.editAddLabel = 'Add'
    }

    if (client != null) {
      this.clientDetail = client;
      this.editAddLabel = 'Edit'
      this.editClient.patchValue({
        fullName: client.Name,
        UserName: client.UserName,
        email: client.Email
      });
    }

  }

  closeBtnClick() {

    this.modalService.dismissAll()
    this.ngOnInit();
  }

  delete(id: number): void {

    this.cfilterClient = this.cfilterClient.filter(client => client.Id !== id);
  }

  onSubmit() {

    if (this.clientDetail != null) {

      const index = this.tableService.getTable().indexOf(this.clientDetail);

      this.clientDetail.Name = this.editClient.get('fullName').value;
      this.clientDetail.UserName = this.editClient.get('UserName').value;
      this.clientDetail.Email = this.editClient.get('email').value;


      this.tableService.getTable()[index] = this.clientDetail;
    }
    else {

      this.clientDetail = new Table();

      this.clientDetail.Id = Math.max.apply(Math, this.tableService.getTable().map(function (o) { return o.Id; })) + 1;

      this.clientDetail.Name = this.editClient.get('fullName').value;
      this.clientDetail.UserName = this.editClient.get('UserName').value;
      this.clientDetail.Email = this.editClient.get('email').value;
      this.clientDetail.imagePath = 'assets/image/3.jpg';

      this.tableService.getTable().push(this.clientDetail);


    }
    this.modalService.dismissAll();
    this.clientDetail = null;
    this.ngOnInit();
  }
}
