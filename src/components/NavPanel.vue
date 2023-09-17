<script setup lang="ts">
import { toRefs } from "vue";
import type { Team } from "./teams/Team";
import { teams } from "@/components/teams/TeamsList";

const props = defineProps<{
  activeTeam: Team;
}>();
const { activeTeam } = toRefs(props);

const emit = defineEmits(["change-team"]);
function changeTeam(selectTeam: Team) {
  emit("change-team", selectTeam);
}
</script>

<template>
  <div class="nav-panel">
    <button
      class="nav-panel__btn"
      :class="{ active: team.name === activeTeam.name }"
      v-for="team in teams"
      @click="changeTeam(team)"
    >
      <p>
        {{ team.name }}
      </p>
      <p>
        {{ team.points }}
      </p>
    </button>
  </div>
</template>

<style scoped lang="scss">
.nav-panel {
  display: flex;
  justify-content: space-around;
  margin-top: 2.4rem;

  .nav-panel__btn {
    position: relative;
    background-color: #fff;
    border: none;
    padding: 0.6rem;
    font-size: 1.6rem;
    &.active {
      font-weight: 600;
    }
  }
  .nav-panel__btn:nth-child(2) {
    color: #970f00;
  }
  .nav-panel__btn:nth-child(3) {
    color: #166520;
  }
  .nav-panel__btn:nth-child(1) {
    color: #929700;
  }
  .nav-panel__btn:nth-child(4) {
    color: #130275;
  }
  .nav-panel__btn:before {
    content: "";
    position: absolute;
    top: -0.2rem;
    left: -0.2rem;
    right: -0.2rem;
    bottom: -0.2rem;
    z-index: -1;
    background: #fff;
    transform: skew(6deg, 6deg);
    transition: all 0.4s;
  }
  .active.nav-panel__btn:before {
    transform: skew(1deg, 1deg);
  }
  .nav-panel__btn:nth-child(2):before {
    background: -webkit-linear-gradient(to right, #ff5900, #c21500);
    background: linear-gradient(to right, #ff5900, #c21500);
  }
  .nav-panel__btn:nth-child(3):before {
    background: -webkit-linear-gradient(to right, #6afa27, #21872f);
    background: linear-gradient(to right, #6afa27, #21872f);
  }
  .nav-panel__btn:nth-child(1):before {
    background: -webkit-linear-gradient(to right, #faff5c, #bfc508);
    background: linear-gradient(to right, #faff5c, #bfc508);
  }
  .nav-panel__btn:nth-child(4):before {
    background: -webkit-linear-gradient(to right, #7860ff, #18009e);
    background: linear-gradient(to right, #7860ff, #18009e);
  }
}
</style>
