<script setup lang="ts">
import type { Task } from "./Task";
import TaskInfo from "./TaskInfo.vue";
import { ref } from "vue";

const moreInfo = ref<boolean>(false);
defineProps<{
  task: Task;
}>();
function showMoreInfo() {
  moreInfo.value = !moreInfo.value;
}
</script>

<template>
  <div class="task-element">
    <TaskInfo
      @click="showMoreInfo"
      :moreInfo="moreInfo"
      :task="task"
      class="task-element__info"
    />
    <div class="pkt">{{ task.points }}</div>
  </div>
</template>

<style lang="scss" scoped>
.task-element {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 0.6rem;
  padding: 0.6rem 0;
  &__info {
    width: 100%;
  }
  .pkt {
    min-width: 4.8rem;
    min-height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.6rem;
    padding: 0.6rem;
    border: 0.1rem solid black;
    font-size: 2rem;
  }
}
</style>
./tasks/Task
