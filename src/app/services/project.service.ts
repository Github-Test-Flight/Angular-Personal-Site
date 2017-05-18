import { Injectable } from '@angular/core';
import { Project } from '../classes/project';
import { PROJECTS } from '../data/projects_data';

@Injectable()
export class ProjectService {
    getProjects(): Project[] {
        return PROJECTS;
    }
}
