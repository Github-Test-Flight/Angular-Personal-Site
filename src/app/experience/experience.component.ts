import { Component } from '@angular/core';
import { EXPERIENCES } from '../data/experience_data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent {
  year = 2021
  experiences = EXPERIENCES
}
