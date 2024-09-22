import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() imageURL: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() technologies: string[] = [];
  @Input() source: string = "";

  getImageUrl(): string {
    return new URL(this.imageURL, import.meta.url).toString();
  }
}
