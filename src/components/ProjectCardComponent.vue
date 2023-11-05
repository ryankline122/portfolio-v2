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
    },
    source: {
      type: String,
      required: false
    }
  },

  methods: {
    getImageUrl() {
    // This path must be correct for your file
    return new URL(`../assets/projects/${this.imageUrl}`, import.meta.url)
    }
  }
}
</script>

<template>
  <div class="card">
    <a :href="getImageUrl()" target="_blank">
      <img :src="getImageUrl()" class="card-img-top" alt="Project Image">
    </a>
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <div class="technologies">
        <span v-for="technology in technologies" :key="technology" class="badge bg-secondary">{{ technology }}</span>
      </div>
      <br>
      <a v-if="source" href="https://drive.google.com/file/d/1l91F5gM8ztTe-moAwJr9ZhFrlsiNgogG/view?usp=sharing">Demo</a>
    </div>
  </div>
</template>

<style scoped>
.card {
  width:auto;
}

.card-img-top {
  height: 15rem;
  object-fit:fill;
}

.technologies {
  margin-top: 10px;
}

.badge {
  margin-right: 5px;
}
</style>