<script setup lang="ts">
import "@/assets/buttonSquare.scss";
import { SORT_TASKS } from "./EnumsSortTasks";
import { computed, ref, toRefs } from "vue";
import IconSortTasks from "./IconSortTasks.vue";
import type { Team } from "@/components/teams/Team";

const status = ref(SORT_TASKS.NONE);
const props = defineProps<{
  team: Team;
}>();
const { team } = toRefs(props);
const sortBtn = computed(() => ({
  enableSort:
    status.value === SORT_TASKS.ASC || status.value === SORT_TASKS.DESC,
  disableSort: status.value === SORT_TASKS.NONE,
}));
function updateSort() {
  changeIconState();
}

function changeIconState() {
  if (status.value === SORT_TASKS.NONE) {
    status.value = SORT_TASKS.ASC;
    return;
  }
  if (status.value === SORT_TASKS.ASC) {
    status.value = SORT_TASKS.DESC;
    return;
  }
  if (status.value === SORT_TASKS.DESC) {
    status.value = SORT_TASKS.NONE;
    return;
  }
}
</script>

<template>
  <div>
    <div
      :class="[team.color, sortBtn]"
      class="square-btn"
      @click="updateSort()"
    >
      <IconSortTasks :status="status" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.disableSort {
  border-width: 0.1rem;
}
.enableSort {
  border-width: 0.2rem;
}
</style>
