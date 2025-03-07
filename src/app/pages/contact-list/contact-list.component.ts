import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  standalone: true, // Mark as standalone
  imports: [CommonModule], // Import necessary modules
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactService] // Provide the service locally to this component
})
export class ContactListComponent implements OnInit {
  contacts: any[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getContacts().subscribe({
      next: (data) => {
        console.log('Contacts fetched:', data);
        this.contacts = data;
      },
      error: (err) => console.error('Error fetching contacts:', err)
    });
  }
}
