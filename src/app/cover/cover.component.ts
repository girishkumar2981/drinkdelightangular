import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../login/user.details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  constructor(private userDetails:UserDetails,private router:Router) { }

  ngOnInit(): void {
    if(this.userDetails.userDetails.userId == 0)
      this.router.navigate(['login']);
  }

}
