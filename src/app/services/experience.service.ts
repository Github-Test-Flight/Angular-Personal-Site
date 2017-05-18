import { Injectable } from '@angular/core';
import { Experience } from '../classes/experience';
import { EXPERIENCES } from '../data/experience_data';

@Injectable()
export class ExperienceService {
    getExperience(): Experience[] {
        return EXPERIENCES;
    }
}
