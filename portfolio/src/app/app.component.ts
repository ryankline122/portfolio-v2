import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './core/nav/nav.component';
import { AboutMeComponent } from './core/about-me/about-me.component';
import { ContactComponent } from './core/contact/contact.component';
import { FooterComponent } from './core/footer/footer.component';
import { TimelineComponent } from './features/timeline/timeline.component';
import { JumbotronComponent } from './shared/jumbotron/jumbotron.component';
import { ProjectsComponent } from './core/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavComponent,
    AboutMeComponent,
    JumbotronComponent,
    ContactComponent,
    FooterComponent,
    TimelineComponent,
    ProjectsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
