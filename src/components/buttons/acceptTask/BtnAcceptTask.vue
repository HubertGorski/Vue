<script setup lang="ts">
import "@/assets/buttonSquare.scss";
// import { ref } from "vue";
import IconDone from "./IconDone.vue";
function acceptTask() {
  console.log("accept");
}
</script>

<template>
  <div>
    <div class="square-btn" @click="acceptTask()">
      <IconDone />
    </div>
  </div>
</template>
