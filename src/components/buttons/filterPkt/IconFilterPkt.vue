<script setup lang="ts">
import { FILTER_PKT } from "./EnumsFilterPkt";

defineProps<{
  status: string;
}>();
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512">
    <path
      v-if="status !== FILTER_PKT.NEGATIVE"
      d="M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 017.82-10.17h175.69a8 8 0 017.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83z"
      fill="currentColor"
    />
    <path
      v-if="status === FILTER_PKT.NEGATIVE"
      d="M256 288c45.42 0 83.62 29.53 95.71 69.83a8 8 0 01-7.87 10.17H168.15a8 8 0 01-7.82-10.17C172.32 317.53 210.53 288 256 288z"
      fill="currentColor"
    />
    <circle cx="184" cy="232" r="24" fill="currentColor" />
    <circle cx="328" cy="232" r="24" fill="currentColor" />
    <circle
      v-if="status !== FILTER_PKT.NEUTRAL"
      cx="256"
      cy="256"
      r="208"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <circle
      v-if="status === FILTER_PKT.NEUTRAL"
      cx="256"
      cy="256"
      r="208"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="16"
    />
  </svg>
</template>
<style scoped></style>
