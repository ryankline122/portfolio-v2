<script setup>
import ProjectCardComponent from './ProjectCardComponent.vue';
</script>

<template>

<div class="container">
    <h2 class="text-center">
        Projects
    </h2>
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