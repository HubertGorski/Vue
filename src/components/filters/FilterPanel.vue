<script setup lang="ts">
import { computed, toRefs } from "vue";
import BtnFilterPkt from "../buttons/filterPkt/BtnFilterPkt.vue";
import BtnFilterStatus from "../buttons/filterStatus/BtnFilterStatus.vue";
import BtnSortTasks from "../buttons/sortTasks/BtnSortTasks.vue";
import type { Team } from "../teams/Team";

const props = defineProps<{
  team: Team;
}>();
const { team } = toRefs(props);
</script>

<template>
  <div class="filter-panel">
    <input placeholder="Search" class="search" />
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
  grid-template-columns: 1fr 3.6rem 3.6rem;
  grid-template-rows: 3.6rem 2.4rem;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
  padding: 0 1.2rem;
  .search {
    padding: 1.2rem;
    font-size: 1.4rem;
    border-radius: 0.6rem;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.3) 0px 0px 0px 1px;
  }
}
</style>
