<script setup lang="ts">
import TaskList from "@/components/tasks/TaskList.vue";
import NavPanel from "@/components/NavPanel.vue";
import { teams } from "@/components/teams/TeamsList";
import { computed, ref, watch } from "vue";
import type { Team } from "@/components/teams/Team";
import FilterPanel from "@/components/filters/FilterPanel.vue";
import { TEAM_COLOR } from "@/components/teams/EnumTeamColor";

const activeTeam = ref<Team>(teams[1]);
const detailsTasks = ref<boolean>(false);
const transitionName = ref("slide-right");
function changeTeam(selectTeam: Team) {
  activeTeam.value = selectTeam;
}
watch(activeTeam, (val, old) => {
  transitionName.value = val.id > old.id ? "slide-left" : "slide-right";
  detailsTasks.value = false;
});
function setDetailsTask(detailsTask: boolean) {
  detailsTasks.value = detailsTask;
}

const color = computed(() => ({
  green: activeTeam.value.color === TEAM_COLOR.GREEN,
  blue: activeTeam.value.color === TEAM_COLOR.BLUE,
  red: activeTeam.value.color === TEAM_COLOR.RED,
  yellow: activeTeam.value.color === TEAM_COLOR.YELLOW,
}));
const header = computed(() => ({
  greenHeader: activeTeam.value.color === TEAM_COLOR.GREEN,
  blueHeader: activeTeam.value.color === TEAM_COLOR.BLUE,
  redHeader: activeTeam.value.color === TEAM_COLOR.RED,
  yellowHeader: activeTeam.value.color === TEAM_COLOR.YELLOW,
}));
</script>

<template>
  <div class="task-list-view">
    <Transition mode="out-in" name="nameTeam">
      <div :key="activeTeam.id" class="header" :class="header">
        {{ activeTeam.name }}
      </div>
    </Transition>
    <FilterPanel :key="activeTeam.id" :team="activeTeam" />
    <Transition :name="transitionName" mode="out-in">
      <div class="task-list" :key="activeTeam.id">
        <TaskList :detailsTask="detailsTasks" :team="activeTeam" />
      </div>
    </Transition>
    <NavPanel
      @details-task="setDetailsTask"
      @change-team="changeTeam"
      :activeTeam="activeTeam"
    />
  </div>
</template>

<style lang="scss" scoped>
.task-list {
  height: 50rem;
  overflow-y: scroll;
  border-bottom: 0.1rem solid #bbbbbb;
}
.header {
  padding: 0.6rem;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  color: black;

  &.greenHeader {
    text-shadow: 1px 1px 2px var(--green-dark);
  }
  &.redHeader {
    text-shadow: 1px 1px 2px var(--red-dark);
  }
  &.yellowHeader {
    text-shadow: 1px 1px 2px var(--yellow-dark);
  }
  &.blueHeader {
    text-shadow: 1px 1px 2px var(--blue-dark);
  }
}

.nameTeam-enter-active,
.nameTeam-leave-active {
  transition: opacity 0.5s ease;
}

.nameTeam-enter-from,
.nameTeam-leave-to {
  opacity: 0;
}
.slide-right-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-80px);
}
.slide-left-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(80px);
}
.slide-right-leave-from,
.slide-right-enter-to,
.slide-left-leave-from,
.slide-left-enter-to {
  opacity: 1;
}
.slide-right-leave-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-left-enter-active {
  transition: all 0.4s ease-in-out;
}
</style>
