import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ProjectsComponent } from "./projects/projects.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NavComponent, FooterComponent, ProjectsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
