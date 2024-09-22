import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './core/home/about/about.component';
import { ContactComponent } from './core/contact/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { TimelineComponent } from './core/resume/timeline/timeline.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ProjectsComponent } from './core/portfolio/projects/projects.component';
import { IntroductionComponent } from "./core/home/introduction/introduction.component";
import { HomeComponent } from "./core/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavComponent,
    AboutComponent,
    JumbotronComponent,
    ContactComponent,
    FooterComponent,
    TimelineComponent,
    ProjectsComponent,
    IntroductionComponent,
    HomeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
