import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ResumeExperience } from '../../models/resume-experience';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NavComponent, FooterComponent, TimelineComponent, ExperienceComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  workExperiences: ResumeExperience[] = [
    {
      Title: 'Associate Software Developer',
      Company: 'Flash',
      StartDate: 'July 2024',
      EndDate: 'Present',
      Description: `Flash is the largest cloud-native parking technology platform and provides industry-leading 
      digital and physical infrastructure. My role as a software developer is focused on maintaining and improving
      one of their Parking Access and Revenue Control products. While most of my work is cloud-based, my team also works
      very closely with a firmware team on features directly impacting the device.`,
      Accomplishments: [
        `Advocated for and implemented several full unit test suites spanning multiple Node projects of
        various size and complexity. The majority of these projects had little to no pre‐existing tests prior
        to this initiative.`,
        `Assited with the integration of third-party partners by implementing an SSO login option utilizing AWS Cognito.`,
        `Contributed to improvements in regards to continuous integration and improvement (CI/CD) by
        introducing automated testing and code formatting within an Azure DevOps Pipeline.`
      ]
    },
    {
      Title: 'Full Stack Web Developer',
      Company: 'Corewell Health',
      StartDate: 'May 2023',
      EndDate: 'June 2024',
      Description: `Corewell Health is currently the largest healthcare system in the state of Michigan and is the result
      of the merger between Beaumont Health and Spectrum Health. My role at Corewell was focused on delivering a fluid user
      experience to our Priority Health insurance members through the online member portal.`,
      Accomplishments: [
        `Developed proof‐of‐concept implementations of new technologies such as AWS for hosting a
        custom web app and its REST API’s on the cloud, and ContentStack for content management.`,
        `Helped retire and replace a legacy Java Spring web service with an up-to-date .NET API in 
        order to improve load times and stabilize the login flow of the member portal application.`,
        `Addressed several low-risk security vulnerabilities and resolved issues related to caching by updating our 
        application’s nginx server configuration to meet modern security standards.`,
        `Developed and deployed two single-sign-on (SSO) features utilizing OAuth2.0, enabling users 
        to view prior authorization requirements and procedure cost estimations from third-party vendors. `,
        `Engaged in cross-functional collaboration with Salesforce developers to seamlessly integrate an 
        Einstein chatbot into an Angular application. The chatbot assists users in tasks such as checking their 
        deductibles, ordering ID cards, and initiating conversations with customer service representatives.`,
      ]
    },
    {
      Title: 'Electronics Engineering Intern',
      Company: 'DISHER',
      StartDate: 'May 2022',
      EndDate: 'May 2024',
      Description: `DISHER is a company that provides engineering, product development, electronics, manufacturing, 
      and talent solutions services to various industries. My time as an Electronics Engineering intern was spent 50/50 on
      client and internal projects. This allowed me to not only build my technical skills, but also learn how to work with 
      different stakeholders in order to ship a product that not only works, but also one that meets their standards.`,
      Accomplishments: [
        `Revived an obsolete test suite by introducing new behavior-driven unit tests, alongside tailored Python 
        scripts to automate common calibration procedures for a camera system in an autonomous robot. `,
        `Teamed up with a diverse cohort of engineering interns to design and develop a device tailored to tackle 
        the unique challenges posed by a hybrid work setup.`,
        `Individually designed, developed, and deployed a full stack web application utilizing the Django web 
        framework to help the electronics team manage lab equipment more efficiently.`,
        `Developed a proof-of-concept high-speed vision application on a raspberry pi to help a client 
        identify issues with their manufacturing equipment`
      ]
    },
  ];

  educationExperience: ResumeExperience[] = [
    {
      Title: 'B.S in Computer Science',
      Company: 'Grand Valley State University',
      StartDate: 'August 2019',
      EndDate: 'December 2023',
      Description: ``,
      Accomplishments: [
        `As part of my senior capstone project, I teamed up with two fellow students to design, develop 
        and deploy a full stack web application for a global manufacturing company. The application 
        communicates with their ServiceNow configuration management database (CMDB) and displays a 
        graphical representation of each of their data centers with easy access to usage statistics, 
        equipment status, and more.`
      ]
    }
  ];

  volunteerExperience: ResumeExperience[] = [
    {
      Title: 'Volunteer',
      Company: 'Alternative Breaks',
      StartDate: 'August 2019',
      EndDate: 'March 2020',
      Description: `Alternative Breaks is a student-led organization at Grand Valley State University that 
      allows students to spend their winter and spring breaks volunteering at various organizations both 
      locally and nationally.`,
      Accomplishments: [
        `Over winter break, I worked with Habitat for Humanity to build homes for low-income families in Grand Rapids, Michigan`,
        `In the spring, our group traveled to Sea Bright, New Jersey and worked with the Saint Bernard Project to restore homes damaged by Hurricane Sandy.`,
      ]
    }
  ];
}
