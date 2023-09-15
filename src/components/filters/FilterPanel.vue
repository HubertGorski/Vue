<script setup lang="ts">
import { computed, toRefs } from "vue";
import BtnFilterPkt from "../buttons/filterPkt/BtnFilterPkt.vue";
import BtnFilterStatus from "../buttons/filterStatus/BtnFilterStatus.vue";
import BtnSortTasks from "../buttons/sortTasks/BtnSortTasks.vue";
import type { Team } from "../teams/Team";
import { TEAM_COLOR } from "../teams/EnumTeamColor";

const props = defineProps<{
  team: Team;
}>();
const { team } = toRefs(props);
const search = computed(() => ({
  greenSearch: team.value.color === TEAM_COLOR.GREEN,
  blueSearch: team.value.color === TEAM_COLOR.BLUE,
  redSearch: team.value.color === TEAM_COLOR.RED,
  yellowSearch: team.value.color === TEAM_COLOR.YELLOW,
}));
</script>

<template>
  <div class="filter-panel">
    <input :class="search" placeholder="Search" class="search" />
    <BtnFilterStatus :team="team" />
    <BtnFilterPkt :team="team" />
    <BtnSortTasks :team="team" />
    <BtnSortTasks :team="team" />
    <BtnSortTasks :team="team" />
  </div>
</template>

<style lang="scss" scoped>
.filter-panel {
  display: grid;
  grid-template-columns: 1fr 4.8rem 4.8rem;
  grid-template-rows: 4.8rem 2.4rem;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
  .search {
    padding: 1.2rem;
    font-size: 1.6rem;
    border-radius: 0.6rem;
  }
  .yellowSearch {
    border: 0.1rem solid var(--yellow-dark);
    color: var(--yellow-dark);
    &::placeholder {
      color: var(--yellow-dark);
    }
    &:focus {
      outline-color: var(--yellow-dark);
    }
  }
  .greenSearch {
    border: 0.1rem solid var(--green-dark);
    color: var(--green-dark);
    &::placeholder {
      color: var(--green-dark);
    }
    &:focus {
      outline-color: var(--green-dark);
    }
  }
  .redSearch {
    border: 0.1rem solid var(--red-dark);
    color: var(--red-dark);
    &::placeholder {
      color: var(--red-dark);
    }
    &:focus {
      outline-color: var(--red-dark);
    }
  }
  .blueSearch {
    border: 0.1rem solid var(--blue-dark);
    color: var(--blue-dark);
    &::placeholder {
      color: var(--blue-dark);
    }
    &:focus {
      outline-color: var(--blue-dark);
    }
  }
}
</style>
