<script setup lang="ts">
import type { Task } from "./Task";

defineProps<{
  moreInfo: boolean;
  task: Task;
}>();
</script>

<template>
  <div class="task-info">
    <h2 class="title">{{ task.title }}</h2>
    <Transition mode="out-in">
      <p class="description" v-if="moreInfo">
        {{ task.description }}
      </p>
    </Transition>
  </div>
</template>

<style scoped>
.task-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-size: 1.6rem;
  overflow: hidden;
}
</style>
