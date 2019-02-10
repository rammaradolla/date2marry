import { Component, OnInit, ViewChild } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
 
  ngOnInit() {
     
  }

}
