import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private year: number;

  ngOnInit(): void {
    this.setDate();
  }

  // Returns current year
  setDate(): void {
    this.year = new Date().getFullYear();
  }

}
