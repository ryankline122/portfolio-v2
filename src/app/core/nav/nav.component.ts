import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isNavOpen: boolean = false;

  toggleNav(): void {
    if (this.isNavOpen) {
      this.isNavOpen = false;
    } else {
      this.isNavOpen = true;
    }
  }
}
