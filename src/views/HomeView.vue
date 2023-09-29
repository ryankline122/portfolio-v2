<script setup>
import JumbotronComponent from '../components/JumbotronComponent.vue';
import NavComponent from '../components/NavComponent.vue';
import AboutComponent from '../components/AboutComponent.vue'
import ProjectComponent from '../components/ProjectComponent.vue'
import TimelineComponent from '../components/TimelineComponent.vue';

</script>

<template>
    <JumbotronComponent></JumbotronComponent>
    <AboutComponent class="py-3"></AboutComponent>
    <TimelineComponent class="py-3"></TimelineComponent>
    <ProjectComponent class="py-5"></ProjectComponent>
</template>
