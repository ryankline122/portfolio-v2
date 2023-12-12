import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './core/nav/nav.component';
import { AboutMeComponent } from './core/about-me/about-me.component';
import { ContactComponent } from './core/contact/contact.component';
import { JumbotronComponent } from './shared/jumbotron/jumbotron.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
