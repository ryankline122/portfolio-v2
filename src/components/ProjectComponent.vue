<script setup>
import ProjectCardComponent from './ProjectCardComponent.vue';
</script>

<template>

<div class="container pt-5">
    <h2 class="text-center mb-3 pt-5 mt-5">
        Projects
    </h2>
    <div class="row mx-0 px-0">
        <div class="col-md-4 px-4">
            <ProjectCardComponent 
                imageUrl="bank.jpg"
                title="NFC Banking Application"
                description="In an open-ended semester project for my Intro to Software Engineering course, my team and I built
                a mock banking application for the Raspberry Pi 4 that interfaces with an NFC HAT that would be able to identify users when logging in
                or transferring money to other accounts."
                :technologies="['Python', 'Tkinter', 'SQLite', 'Raspberry Pi 4']"
            />
        </div>
        <div class="col-md-4 px-4">
            <ProjectCardComponent 
                imageUrl="pcb.PNG"
                title="PCB Viewer"
                description="As part of a summer internship project at DISHER, I teamed up with 3 interdisiplinary engineering interns to
                design and develop a device that would allow remote team members to collaborate on PCB boards in real-time. My role on this
                project was to build the UI and interface with motors on the device to achieve the desired movements."
                :technologies="['Python', 'Qt', 'Raspberry Pi 4']"
            />
        </div>
        <div class="col-md-4 px-4">
            <ProjectCardComponent 
                imageUrl="job-board.PNG"
                title="Job Board Scraper"
                description="Using VueJS on the front-end and ExpressJs paired with the Python web scraper, Scrapy, on the back-end, I created
                an easy-to-use job board search tool. This tool pulls in from multiple job boards, filters out repeat posts, and allows you to easily 
                exclude the jobs you don't want to see."
                :technologies="['VueJs', 'ExpressJS', 'Python']"
            />
        </div>
    </div><br>

    <div class="row mx-0 px-0">
        <div class="col-md-4 px-4">
            <ProjectCardComponent 
                imageUrl="maze.PNG"
                title="Maze Generator and Solver"
                description="One of the first assignments in GVSU's Applied Artificial Intelligence course was to implement a maze generation algorthim
                of your choice in addition to implementing two different maze solving algorithms. For this assignment, I used Prim's for the generation and
                Tremaux and A* search algorithms to successfully complete this assignment."
                :technologies="['Python', 'Prim\'s Algorithm', 'Tremaux Search', 'A* Search']"
            />
        </div>
        <div class="col-md-4 px-4">
            <ProjectCardComponent 
                imageUrl="monopoly.PNG"
                title="Monopoly/Board Game Mechanics Demo"
                description="In this (unfinished) hobby project, I wanted to learn how basic board game mechanics could be implemented in Unity. In this
                demo, I successfully implemented dice rolling mechanics in addition to moving pawns around the board based on the dice rolls. In the future,
                I would like to continue to build off of this demo to fully implement some of my favorite board games."
                :technologies="['C#', 'Unity']"
            />
        </div>
    
    </div><br>
</div>


</template>