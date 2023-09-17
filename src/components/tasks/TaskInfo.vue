<script setup lang="ts">
import type { Task } from "./Task";

defineProps<{
  moreInfo: boolean;
  task: Task;
}>();
</script>

<template>
  <div class="task-info">
    <div class="task-info__header">
      <div class="teamsStatuses">
        <div class="team team1"></div>
        <div class="team team2"></div>
        <div class="team team3"></div>
        <div class="team team4"></div>
      </div>
      <h2 class="title">{{ task.title }}</h2>
    </div>
    <div class="description">
      <Transition mode="out-in">
        <p class="description__content" v-if="moreInfo">
          {{ task.description }}
        </p>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.task-info__header {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}
.teamsStatuses {
  display: grid;
  grid-template-columns: 6px 6px;
  grid-template-rows: 6px 6px;
  gap: 0.4rem;
  .description {
    padding: 0.6rem 2.4rem;
  }
  .team {
    width: 100%;
    height: 100%;
    &.team1 {
      background-color: rgb(255, 149, 0);
    }
    &.team2 {
      background-color: red;
    }
    &.team3 {
      background-color: green;
    }
    &.team4 {
      background-color: blue;
    }
  }
}
.task-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    font-weight: 500;
    color: #222;
  }
  .description {
    padding: 0.6rem 2.4rem;
  }
}
.v-enter-to,
.v-leave-from {
  transition: max-height 1s;
  max-height: 100px;
}

.v-enter-from,
.v-leave-to {
  transition: all 1s;
  max-height: 0px;
  opacity: 0;
}

.task-info {
  padding: 0.6rem;
  font-size: 1.2rem;
  overflow: hidden;
}
</style>
