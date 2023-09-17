<script setup lang="ts">
import "@/assets/buttonSquare.scss";
import { FILTER_STATUS } from "./EnumsFilterStatus";
import { computed, ref, toRefs } from "vue";
import IconFilterStatus from "./IconFilterStatus.vue";
import type { Team } from "@/components/teams/Team";
const status = ref(FILTER_STATUS.ALL);
const props = defineProps<{
  team: Team;
}>();
const { team } = toRefs(props);
function updateFilter() {
  console.log("filtrowanie po statusie");
  changeIconState();
}
const sortBtn = computed(() => ({
  enableSort:
    status.value === FILTER_STATUS.DONE ||
    status.value === FILTER_STATUS.UNDONE,
  disableSort: status.value === FILTER_STATUS.ALL,
}));

function changeIconState() {
  if (status.value === FILTER_STATUS.ALL) {
    status.value = FILTER_STATUS.DONE;
    return;
  }
  if (status.value === FILTER_STATUS.DONE) {
    status.value = FILTER_STATUS.UNDONE;
    return;
  }
  if (status.value === FILTER_STATUS.UNDONE) {
    status.value = FILTER_STATUS.ALL;
    return;
  }
}
</script>

<template>
  <div>
    <div
      :class="[team.color, sortBtn]"
      class="square-btn"
      @click="updateFilter()"
    >
      <IconFilterStatus :status="status" />
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
