import { Component, Input } from '@angular/core';
import { ResumeExperience } from '../../../models/resume-experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  @Input() exp: ResumeExperience = {
    Title: '',
    Company: '',
    StartDate: '',
    EndDate: '',
    Description: '',
    Accomplishments: []
  };
}
