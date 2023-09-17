<script setup lang="ts">
import "@/assets/buttonSquare.scss";
import { computed, ref } from "vue";
import { changeState } from "../Button3Statuses";
import IconFilterStatus from "./IconFilterStatus.vue";
import { getFilterStatus } from "./EnumsFilterStatus";
const statusNumber = ref<number>(2);
const sortStatus = computed(() => ({
  enableSort: statusNumber.value === 0 || statusNumber.value === 1,
  disableSort: statusNumber.value === 2,
}));
function updateFilter() {
  console.log("filtrowanie po statusie");
  statusNumber.value = changeState(statusNumber.value);
}
</script>

<template>
  <div>
    <div :class="sortStatus" class="square-btn" @click="updateFilter()">
      <IconFilterStatus :status="getFilterStatus(statusNumber)" />
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
