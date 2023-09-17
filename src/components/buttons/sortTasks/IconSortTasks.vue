<script setup lang="ts">
import { SORT_TASKS } from "./EnumsSortTasks";

defineProps<{
  status: string;
}>();
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
    <path
      v-if="status === SORT_TASKS.DESC"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="48"
      d="M112 184l144 144 144-144"
    />
    <path
      v-if="status === SORT_TASKS.ASC"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="48"
      d="M112 328l144-144 144 144"
    />
    <path
      v-if="status === SORT_TASKS.NONE"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
      d="M112 328l144-144 144 144"
    />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  max-width: 4.2rem;
  max-height: 2rem;
}
</style>
