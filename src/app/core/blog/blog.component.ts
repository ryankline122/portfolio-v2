import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { NavComponent } from "../../components/nav/nav.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FooterComponent, NavComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
}
