import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  getFormEndpoint: string = "https://getform.io/f/05681971-283c-40ad-9c6b-b116b15df570"
}
