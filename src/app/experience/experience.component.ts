import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experiences.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  providers: [ExperienceService]
})
export class ExperienceComponent implements OnInit {

  constructor(
    private experienceService: ExperienceService
  ) { }

  ngOnInit() {
  }
}
