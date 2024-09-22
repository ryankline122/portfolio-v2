import { Component } from '@angular/core';
import { IntroductionComponent } from "./introduction/introduction.component";
import { NavComponent } from "../../components/nav/nav.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroductionComponent, NavComponent, AboutMeComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
