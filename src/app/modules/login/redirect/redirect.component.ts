import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {
  linkedInToken: string = '';

  constructor(private route: ActivatedRoute, private _router: Router) {

  }
  ngOnInit(): void {
    this.linkedInToken = this.route.snapshot.queryParams["code"];
    console.log("linkedintoken", this.linkedInToken)
    axios.get(`${environment.backend_url}login?token=${this.linkedInToken}`).then(res => {
      localStorage.setItem('token', res.data);
      axios.get(`${environment.backend_url}getProfile?accessToken=${res.data}`).then((res) => {
        localStorage.setItem('User', JSON.stringify(res.data));
        this._router.navigate(['/social/linkedin']);
      }).catch((err) => {
        alert("Something Went wrong please try again")
        this._router.navigate(['/social/linkedin']);
      });
    }).catch((err) => {
      alert("Something Went wrong please try again")
      this._router.navigate(['/social/linkedin']);
      console.log(err.response.data)
    });
  }

}
