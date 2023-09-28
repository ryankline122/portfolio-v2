<script>
export default {
  name: 'ProjectCard',
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    technologies: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="card">
    <img :src="imageUrl" class="card-img-top" alt="Project Image">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <div class="technologies">
        <span v-for="technology in technologies" :key="technology" class="badge bg-secondary">{{ technology }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width:auto;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.technologies {
  margin-top: 10px;
}

.badge {
  margin-right: 5px;
}
</style>