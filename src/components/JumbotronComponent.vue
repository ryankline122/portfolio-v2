<script setup>
</script>

<template>
  <div class="header d-flex align-items-center justify-content-center">
    <div class="overlay text-center">
      <h1>Hi, I'm Ryan</h1>
      <p>
      Full-Stack Developer at Corewell Health
      </p>
    </div>
  </div>
</template>


<style scoped>
.header {
  height: 95vh;
  background-image: url('@/assets/wallpaper.jpg'); /* Update the path to your image */
  background-size: cover;
  background-position: center;
  color: white; /* Adjust text color for better visibility */
  text-align: center;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5); /* Add a semi-transparent overlay for better readability */
  padding: 2rem;
}
</style>