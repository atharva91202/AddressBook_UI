import { Routes , RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-contact', component: AddContactComponent },
  { path: 'contact-list', component: ContactListComponent },
];
