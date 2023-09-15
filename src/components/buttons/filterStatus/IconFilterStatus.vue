<script setup lang="ts">
import { FILTER_STATUS } from "./EnumsFilterStatus";

defineProps<{
  status: string;
}>();
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
    <path
      v-if="status === FILTER_STATUS.ALL"
      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="16"
    />
    <path
      v-if="status !== FILTER_STATUS.ALL"
      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <path
      v-if="status === FILTER_STATUS.UNDONE"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M320 320L192 192M192 320l128-128"
    />
    <path
      v-if="status === FILTER_STATUS.DONE"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M352 176L217.6 336 160 272"
    />
    <path
      v-if="status === FILTER_STATUS.ALL"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
      d="M352 176L217.6 336 160 272"
    />
  </svg>
</template>
