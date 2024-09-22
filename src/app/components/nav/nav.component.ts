import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink, 
    CommonModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isNavOpen: boolean = false;

  constructor() {}

  toggleNav(): void {
    if (this.isNavOpen) {
      this.isNavOpen = false;
    } else {
      this.isNavOpen = true;
    }
  }
}
