import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  linkedinLogo: string = "/assets/images/linkedin.png";
  linkedinURL: string = "https://www.linkedin.com/in/ryanjkline/";
  ghLogo: string = "/assets/images/gh.png";
  ghURL: string = "https://github.com/ryankline122";
}
