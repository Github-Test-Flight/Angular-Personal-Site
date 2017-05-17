import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  private year: number;

  constructor(
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.setDate();
  }

  // Set the current year globally through SharedDataService
  setDate(): void {
    this.year = new Date().getFullYear();
    this.sharedDataService.setYear(this.year);
  }

}
