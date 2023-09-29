<script setup>
import JumbotronComponent from '../components/JumbotronComponent.vue';
import NavComponent from '../components/NavComponent.vue';
import AboutComponent from '../components/AboutComponent.vue'
import ProjectComponent from '../components/ProjectComponent.vue'
import TimelineComponent from '../components/TimelineComponent.vue';
import ContactComponent from '../components/ContactComponent.vue';
import FooterComponent from '../components/FooterComponent.vue'

</script>

<template>
    <div id="home">
        <JumbotronComponent class="py-5"></JumbotronComponent>
    </div>

    <div id="about">
        <AboutComponent class="py-5"></AboutComponent>
    </div>
    <TimelineComponent class="py-3"></TimelineComponent>
    
    <div id="projects">
        <ProjectComponent class="py-5"></ProjectComponent>
    </div>

    <div id="contact">
        <ContactComponent class="py-5"></ContactComponent>
    </div>

    <FooterComponent></FooterComponent>
</template>
