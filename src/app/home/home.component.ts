import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  year: number;

  constructor(
    private sharedDataService: SharedDataService
  ) { }

  ngOnInit() {
    // gets current year
    this.year = this.sharedDataService.getYear();
  }

}
