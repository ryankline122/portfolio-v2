<script setup>
import ProjectCardComponent from './ProjectCardComponent.vue';
</script>

<template>

<div class="container pt-5">
    <h2 class="text-center mb-3 pt-5 mt-5">
        Projects
    </h2>
    <div class="row mx-0 px-0">
        <div class="col px-4">
            <ProjectCardComponent 
                imageUrl="bank.jpg"
                title="NFC Banking Application"
                description="Describe Me"
                :technologies="['Python', 'Tkinter', 'SQLite', 'Raspberry Pi 4']"
            />
        </div>
        <div class="col px-4">
            <ProjectCardComponent 
                imageUrl="pcb.PNG"
                title="PCB Viewer"
                description="Describe Me"
                :technologies="['Python', 'Qt', 'Raspberry Pi 4']"
            />
        </div>
        <div class="col px-4">
            <ProjectCardComponent 
                title="Hello World 3"
                description="Just playing around"
                :technologies="['Java', 'Python']"
            />
        </div>
    </div><br>

    <div class="row mx-0 px-0">
        <div class="col px-4">
            <ProjectCardComponent 
                title="Hello World"
                description="Just playing around"
                :technologies="['Java', 'Python']"
            />
        </div>
        <div class="col px-4">
            <ProjectCardComponent 
                title="Hello World 2"
                description="Just playing around"
                :technologies="['Java', 'Python']"
            />
        </div>
        <div class="col px-4">
            <ProjectCardComponent 
                title="Hello World 3"
                description="Just playing around"
                :technologies="['Java', 'Python']"
            />
        </div>
    </div><br>
</div>


</template>