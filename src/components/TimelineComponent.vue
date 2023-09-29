<script>
  export default {
    name: 'Timeline',
    data() {
      return {
        timelineItems: [
          {
            title: 'Intern, Information Technology',
            company: 'DISHER',
            startDate: 'November 2021',
          },
          {
            title: 'Intern, Electronics Engineering',
            company: 'DISHER',
            startDate: 'November 2021',
          },
          {
            title: 'Intern, Web Developer',
            company: 'Corewell Health',
            startDate: 'May 2023',
          },
          {
            title: 'Computer Science Graduate',
            company: 'Grand Valley State University',
            startDate: 'December 2023',
          },
          {
            title: 'TBD',
            company: '',
            startDate: '2024',
          },
          // Add more timeline items here...
        ],
      };
    },
  };
  </script>


<template>
    <div class="container">
      <div class="row text-center justify-content-center mb-5">
        <div class="col-xl-6 col-lg-8">
          <h2>Professional Experience</h2>
          <p class="text-muted">Some text about my experiences</p>
        </div>
      </div>
  
      <div class="row">
        <div class="col">
          <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
            <div
              class="timeline-step"
              v-for="(item, index) in timelineItems"
              :key="index"
            >
              <div class="timeline-content">
                <div class="inner-circle"></div>
                <p class="h6 mt-3 mb-2">{{ item.startDate }}</p>
                <p class="h6 text-muted px-4">{{ item.company}}</p>
                <p class="h6 text-muted px-4"><b>{{ item.title}}</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

<style scoped>
  .timeline-steps {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .timeline-steps .timeline-step {
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  
  @media (min-width: 768px) {
    .timeline-steps .timeline-step:not(:last-child):after {
      content: "";
      display: block;
      border-top: 0.25rem dotted #3b82f6;
      width: 3.46rem;
      position: absolute;
      left: 7.5rem;
      top: 0.3125rem;
    }
    .timeline-steps .timeline-step:not(:first-child):before {
      content: "";
      display: block;
      border-top: 0.25rem dotted #3b82f6;
      width: 3.8125rem;
      position: absolute;
      right: 7.5rem;
      top: 0.3125rem;
    }
  }
  
  .timeline-steps .timeline-content {
    width: 11rem;
    text-align: center;
  }
  
  .timeline-steps .timeline-content .inner-circle {
    border-radius: 1.5rem;
    height: 1rem;
    width: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #3b82f6;
  }
  
  .timeline-steps .timeline-content .inner-circle:before {
    content: "";
    background-color: #3b82f6;
    display: inline-block;
    height: 3rem;
    width: 3rem;
    min-width: 3rem;
    border-radius: 6.25rem;
    opacity: 0.5;
  }
</style>
  