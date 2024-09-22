import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ResumeComponent } from './core/resume/resume.component';
import { BlogComponent } from './core/blog/blog.component';
import { ContactComponent } from './core/contact/contact.component';
import { PortfolioComponent } from './core/portfolio/portfolio.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'projects', component: PortfolioComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'contact', component: ContactComponent},
];
