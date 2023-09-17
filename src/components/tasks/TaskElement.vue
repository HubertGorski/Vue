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
    <div class="task-element__status">
      <div class="status-line">
        <div class="status status--team1"></div>
      </div>
      <div class="status-line">
        <div class="status status--team2"></div>
      </div>
      <div class="status-line">
        <div class="status status--team3"></div>
      </div>
      <div class="status-line">
        <div class="status status--team4"></div>
      </div>
    </div>
    <TaskInfo @click="showMoreInfo" :moreInfo="moreInfo" :task="task" />
    <div class="pkt">{{ task.points }}</div>
  </div>
</template>

<style lang="scss" scoped>
.task-element {
  display: grid;
  grid-template-columns: 3.2rem auto 4.8rem;
  gap: 0.6rem;
  &__info {
    width: 100%;
  }
  &__status {
    position: relative;
  }
  .status-line::after {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 0.1rem;
    z-index: 1;
  }
  .status-line:nth-child(1)::after {
    left: 0.9rem;
    background-color: red;
  }
  .status-line:nth-child(2)::after {
    left: 1.5rem;
    background-color: green;
  }
  .status-line:nth-child(3)::after {
    left: 2.1rem;
    background-color: #5b5b00;
  }
  .status-line:nth-child(4)::after {
    left: 2.7rem;
    background-color: blue;
  }
  .status {
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: #fff;
    z-index: 2;
    &--team1 {
      border: 0.1rem solid red;
      left: 0.3rem;
      top: 0.6rem;
    }

    &--team2 {
      border: 0.1rem solid green;
      left: 0.9rem;
      top: 1.2rem;
    }
    &--team3 {
      border: 0.1rem solid #5b5b00;
      left: 1.5rem;
      top: 1.8rem;
    }
    &--team4 {
      border: 0.1rem solid blue;
      left: 2.1rem;
      top: 2.4rem;
    }
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
    margin: 0.6rem 0;
  }
}
</style>
