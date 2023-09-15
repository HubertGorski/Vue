<script setup lang="ts">
import "@/assets/buttonSquare.scss";
import { FILTER_PKT } from "./EnumsFilterPkt";
import { computed, ref, toRefs } from "vue";
import IconFilterPkt from "./IconFilterPkt.vue";
import type { Team } from "@/components/teams/Team";
const status = ref(FILTER_PKT.NEUTRAL);
const props = defineProps<{
  team: Team;
}>();
const { team } = toRefs(props);

function updateFilter() {
  console.log("get tasks from database");
  changeIconState();
}
const sortBtn = computed(() => ({
  enableSort:
    status.value === FILTER_PKT.NEGATIVE ||
    status.value === FILTER_PKT.POSITIVE,
  disableSort: status.value === FILTER_PKT.NEUTRAL,
}));
function changeIconState() {
  if (status.value === FILTER_PKT.NEGATIVE) {
    status.value = FILTER_PKT.NEUTRAL;
    return;
  }
  if (status.value === FILTER_PKT.POSITIVE) {
    status.value = FILTER_PKT.NEGATIVE;
    return;
  }
  if (status.value === FILTER_PKT.NEUTRAL) {
    status.value = FILTER_PKT.POSITIVE;
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
      <IconFilterPkt :status="status" />
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
