import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../../components/project-card/project-card.component';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  imageFolder: string = "/assets/images/projects"
  projects: Project[] = [
    {
      image: `${this.imageFolder}/SSBM2.PNG`,
      title: "Super Smash Bros. Melee AI",
      description: `
      Using an expert-system style approach, I created an AI agent to play as Donkey Kong in Super Smash Bros. Melee.
      A Python script reads in directly from the games memory to access important gamestate like player
      location, health, and remaining lives to make informed decisions on what actions to take at any given moment.
      `,
      technologies: ['Python', 'Dolphin Emulator', 'Dolphin Memory Engine'],
      source: "https://github.com/ryankline122/SSBM_AI"
    },
    {
      image: `${this.imageFolder}/pcb.PNG`,
      title: "PCB Viewer",
      description: `
      As part of a summer internship project at DISHER, I teamed up with 3 interdisiplinary engineering interns to
      design and develop a device that would allow remote team members to collaborate on PCB boards in real-time.
      My role on this project was to build the UI and interface with motors on the device to achieve the desired movements.
      `,
      technologies: ['Python', 'Qt', 'Raspberry Pi 4']
    },
    {
      image: `${this.imageFolder}/job-board.PNG`,
      title: "Job Board Scraper",
      description: `
      Using VueJS on the front-end and ExpressJs paired with the Python web scraper, Scrapy, on the back-end, I created
      an easy-to-use job board search tool. This tool pulls in from multiple job boards, filters out repeat posts, and allows you to easily
      exclude the jobs you don't want to see.
      `,
      technologies: ['VueJs', 'ExpressJS', 'Python'],
    },
    {
      image: `${this.imageFolder}/maze.PNG`,
      title: "Maze Generator and Solver",
      description: `
      One of the first assignments in GVSU's Applied Artificial Intelligence course was to implement a maze generation algorthim
      of your choice in addition to implementing two different maze solving algorithms. For this assignment, I used Prim's for the generation and
      Tremaux and A* search algorithms to successfully complete this assignment.
      `,
      technologies: ['Python', 'Prim\'s Algorithm', 'Tremaux Search', 'A* Search'],
      source: "https://github.com/rkline122/Generating-Mazes-and-Finding-Solutions"
    },
    {
      image: `${this.imageFolder}/bank.jpg`,
      title: "NFC Banking Application",
      description: `
      In an open-ended semester project for my Intro to Software Engineering course, my team and I built
      a mock banking application for the Raspberry Pi 4 that interfaces with an NFC HAT that would be able to identify users when logging in
      or transferring money to other accounts.
      `,
      technologies: ['Python', 'Tkinter', 'SQLite', 'Raspberry Pi 4'],
    },
    {
      image: `${this.imageFolder}/monopoly.PNG`,
      title: "Board Game Mechanics Demo",
      description: `
      In this hobby project, I wanted to learn how basic board game mechanics could be implemented in Unity. In this
      demo, I successfully implemented dice rolling mechanics in addition to moving pawns around the board based on the
      dice rolls. In the future, I would like to continue to build off of this demo to fully implement some of my
      favorite board games.
      `,
      technologies: ['C#', 'Unity'],
      source: "https://github.com/ryankline122/Monopoly-Clone"
    },
  ];
}
