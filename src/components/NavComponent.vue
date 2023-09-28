<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
        <RouterLink class="navbar-brand" :to="{name: 'home'}">
            <div class="name">Ryan Kline</div>
            <hr class="name-spacer">
            <div class="subtitle">Software Engineer</div>
        </RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto mx-5">
            <li class="nav-item mx-3">
                <RouterLink :to="{name: 'home'}" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item mx-3">
                <RouterLink :to="{name: 'home'}" class="nav-link">About</RouterLink>
            </li>
            <li class="nav-item mx-3">
                <RouterLink :to="{name: 'home'}" class="nav-link">Projects</RouterLink>
            </li>
            <li class="nav-item mx-3">
                <RouterLink :to="{name: 'home'}" class="nav-link">Contact</RouterLink>
            </li>
        </ul>
        </div>
    </div>
</nav>
</template>

<style>
.name {
    font-size: 1.5em;
    text-align: center;
}

.name-spacer{
    padding: 0;
    margin: .4rem;
}

.subtitle {
    font-size: 1rem;
    text-align: center;
}

</style>
