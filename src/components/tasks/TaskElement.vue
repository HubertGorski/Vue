<script setup lang="ts">
import BtnMoreInfo from "../buttons/moreInfo/BtnMoreInfo.vue";
import type { Team } from "../teams/Team";
import type { Task } from "./Task";
import TaskInfo from "./TaskInfo.vue";
import { ref, toRefs, watch } from "vue";
const moreInfo = ref<boolean>(false);
const props = defineProps<{
  task: Task;
  team: Team;
  detailsTask: boolean;
}>();
const { detailsTask } = toRefs(props);

watch(detailsTask, (newQuestion, oldQuestion) => {
  moreInfo.value = detailsTask.value;
});

function showMoreInfo() {
  moreInfo.value = !moreInfo.value;
}
</script>

<template>
  <div :class="{ active: moreInfo }" class="task-element">
    <TaskInfo @click="showMoreInfo" :moreInfo="moreInfo" :task="task" />
    <Transition name="slide-fade">
      <div v-if="!moreInfo" class="task-element__panel">
        <router-link
          :to="{
            name: 'taskdetails',
            params: { id: task.id, team: team.color },
          }"
        >
          <Transition name="task-details">
            <BtnMoreInfo />
          </Transition>
        </router-link>
        <div class="pkt">{{ task.points }}</div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.task-element {
  display: flex;
  justify-content: space-between;
  gap: 0.6rem;
  padding: 0 1.2rem;
  align-items: center;
  border-top: 0.1rem solid #bbbbbb;
  &__panel {
    display: flex;
    justify-content: space-between;
    gap: 0.6rem;
    margin: 0.6rem 0;
    color: black;
    a {
      color: #444;
    }
  }
  .pkt {
    width: 3.6rem;
    height: 3.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.6rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    font-size: 1.6rem;

    background-color: #fff;
    z-index: 2;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
