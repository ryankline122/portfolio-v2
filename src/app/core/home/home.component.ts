import { Component } from '@angular/core';
import { IntroductionComponent } from "./introduction/introduction.component";
import { NavComponent } from "../../components/nav/nav.component";
import { AboutComponent } from './about/about.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    IntroductionComponent, 
    NavComponent, 
    AboutComponent, 
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {}
}