import { Component, OnInit } from '@angular/core';
import { Project } from '../classes/project';
import { ProjectService } from '../services/project.service';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  year: number;
  projects: Project[];

  constructor(
    private projectService: ProjectService,
    private sharedDataService: SharedDataService
  ) { }

  ngOnInit() {
    // gets current year
    this.year = this.sharedDataService.getYear();

    // Gets projects
    this.projects = this.projectService.getProjects();
  }

}
