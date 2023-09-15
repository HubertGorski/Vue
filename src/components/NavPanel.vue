<script setup lang="ts">
import type { Team } from "./teams/Team";
import { teams } from "@/components/teams/TeamsList";

defineProps<{
  color: object;
}>();
const emit = defineEmits(["change-team"]);

function changeTeam(selectTeam: Team) {
  emit("change-team", selectTeam);
}
</script>

<template>
  <div class="nav-panel">
    <button
      class="nav-panel__btn"
      :class="team.color"
      v-for="team in teams"
      @click="changeTeam(team)"
    >
      {{ team.name }}
      {{ team.points }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.nav-panel {
  display: flex;
  justify-content: space-around;
  gap: 1.2rem;

  .nav-panel__btn {
    font-size: 1.8rem;
    text-decoration: none;
    padding: 0.6rem 1.2rem;
    border-radius: 0.6rem;
  }
}
</style>
