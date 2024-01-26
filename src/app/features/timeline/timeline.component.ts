import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineItem } from '../../../models/timelineItem.model';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  timelineItems: TimelineItem[] = [
    {title: "Intern, Information Technology", company: "DISHER", startDate: "November 2021"},
    {title: "Intern, Electronics Engineering", company: "DISHER", startDate: "May 2022"},
    {title: "Intern, Web Developer", company: "Corewell Health", startDate: "May 2023"},
    {title: "Obtained C.S Degree", company: "Grand Valley State University", startDate: "December 2023"},
    {title: "Full-Stack Web Developer", company: "Corewell Health", startDate: "Janurary 2024"},
  ]
  resume: string = "/assets/documents/Ryan-Kline-Resume-Public.pdf"
}
