import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../features/project-card/project-card.component';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {image: "/assets/images/wallpaper.jpg", title: "Project1", description: "Description", technologies: ["Python", "C++"], source: "github.com"},
    {image: "/assets/images/wallpaper.jpg", title: "Project1", description: "Description", technologies: ["Python", "C++"]},
    {image: "/assets/images/wallpaper.jpg", title: "Project1", description: "Description", technologies: ["Python", "C++"], source: "github.com"},
    {image: "/assets/images/wallpaper.jpg", title: "Project1", description: "Description", technologies: ["Python", "C++"], source: "github.com"},
  ];
}
