<script setup lang="ts">
import { ref, toRefs } from "vue";
import type { Team } from "./teams/Team";
import { teams } from "@/components/teams/TeamsList";

const props = defineProps<{
  activeTeam: Team;
}>();
const { activeTeam } = toRefs(props);

const emit = defineEmits(["change-team", "details-task"]);

function changeTeam(selectTeam: Team) {
  emit("change-team", selectTeam);
  setAllShowMoreInfo();
}

const detailsTasks = ref<boolean>(false);
function setAllShowMoreInfo() {
  detailsTasks.value = !detailsTasks.value;
  emit("details-task", detailsTasks.value);
}
</script>

<template>
  <div class="nav-panel">
    <div
      class="nav-panel__btn"
      :class="{ active: team.name === activeTeam.name }"
      v-for="team in teams"
      @click="changeTeam(team)"
    >
      <div class="name">
        {{ team.name }}
      </div>
      <div class="points">
        {{ team.points }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-panel {
  display: flex;
  justify-content: space-around;
  padding-top: 0.6rem;

  &__btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0.6rem;
    font-size: 1.6rem;
    &.active {
      font-weight: 600;
    }
    .name {
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      padding: 0.6rem 1.2rem;
      border-radius: 0.6rem;
    }
  }
  .nav-panel__btn:nth-child(2).active {
    color: #970f00;
    .name {
      border: 0.1rem solid #970f00;
    }
  }
  .nav-panel__btn:nth-child(3).active {
    color: #166520;
    .name {
      border: 0.1rem solid #166520;
    }
  }
  .nav-panel__btn:nth-child(1).active {
    color: rgb(255, 149, 0);
    .name {
      border: 0.1rem solid rgb(255, 149, 0);
    }
  }
  .nav-panel__btn:nth-child(4).active {
    color: #130275;
    .name {
      border: 0.1rem solid #130275;
    }
  }
  .nav-panel__btn:before {
    content: "";
    position: absolute;
    top: -0.2rem;
    left: -0.2rem;
    right: -0.2rem;
    bottom: -0.2rem;
    z-index: -1;
    transform: skew(6deg, 6deg);
    transition: all 0.4s;
  }
}
</style>
